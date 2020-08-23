import cloneDeep from "lodash/cloneDeep";

let animationRequest;
let gameCanvas;
let ctx;

enum BAT_SIDE {
  left = "LEFT",
  right = "RIGHT",
}

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;

const BAT_SIDE_MARGIN = 20;
const BALL_RADIUS = 10;
const BAT_HEIGHT = 60;
const BAT_WIDTH = 8;

const WIN_SCORE = 11;

var BLIP;

const INPUT = {
  UP: "q",
  DOWN: "a",
};

const PHASE = {
  START: "START",
  GAME: "GAME",
  END: "END",
};

const getDisplacement = (velocity, angle) => {
  // Angles in radians;
  const dy = velocity * Math.cos(angle);
  const dx = velocity * Math.sin(angle);
  return [dx, dy];
};

const randomiseBallLocation = () => {
  const newYPosition = Math.random() * GAME_HEIGHT;
  const newAngle = 4 + Math.random() * 1;
  // console.log("random angle: ", newAngle);
  // console.log("random y pos: ", newYPosition);
  return [newYPosition, newAngle];
};

const INITIAL_BALL_STATE = {
  x: GAME_WIDTH / 2 - 5,
  y: randomiseBallLocation()[0],
  width: 10,
  height: 10,
  velocity: 7,
  angle: randomiseBallLocation()[1],
  dx: 0,
  dy: 0,
};

const INITIAL_LEFT_BAT_STATE = {
  x: BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 6,
};

const INITIAL_RIGHT_BAT_STATE = {
  x: GAME_WIDTH - BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 3,
};

const BACKGROUND_COLOR = "#333";
const MAIN_COLOR = "#CCC";

const makeInitialGameState = () => {
  const [ballY, angle] = randomiseBallLocation();
  BLIP = new Audio("./blip.wav");
  return {
    phase: PHASE.START,
    ball: {
      x: INITIAL_BALL_STATE.x,
      y: ballY,
      width: INITIAL_BALL_STATE.width,
      height: INITIAL_BALL_STATE.height,
      velocity: INITIAL_BALL_STATE.velocity,
      angle: angle,
      paused: false,
      dy: 0,
      dx: 0,
    },
    batLeft: {
      x: INITIAL_LEFT_BAT_STATE.x,
      y: INITIAL_LEFT_BAT_STATE.y,
      speed: 0,
      upPressed: false,
      downPressed: false,
    },
    batRight: {
      x: INITIAL_RIGHT_BAT_STATE.x,
      y: INITIAL_RIGHT_BAT_STATE.y,
      direction: null,
      speed: 0,
    },
    score: {
      player1: 0,
      player2: 0,
    },
  };
};

let gameState = cloneDeep(makeInitialGameState());

const clearCanvas = () => {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const playBlip = () => {
  const soundPromise = BLIP.play();
  // In browsers that don’t yet support this functionality,
  // playPromise won’t be defined.
  if (soundPromise !== undefined) {
    soundPromise
      .then(function () {
        // console.log("PLAY SOUND");
        // Automatic playback started!
      })
      .catch(function (error) {
        console.log("Sound error: ", error);
        // Automatic playback failed.
        // Show a UI element to let the user manually start playback.
      });
  }
};

const drawCenterLine = () => {
  ctx.strokeStyle = MAIN_COLOR;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(GAME_WIDTH / 2, 0);
  ctx.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
  ctx.stroke();
};

const drawScore = () => {
  ctx.strokeStyle = "white";
  ctx.font = "60px arial";
  ctx.textAlign = "right";
  ctx.fillText(gameState.score.player1, GAME_WIDTH / 2 - 20, 60);
  ctx.textAlign = "left";
  ctx.fillText(gameState.score.player2, GAME_WIDTH / 2 + 20, 60);
};

const drawTitle = () => {
  ctx.fillStyle = "white";
  ctx.font = "30px arial";
  ctx.textAlign = "left";
  ctx.fillText("AMAZING TABLE TENNIS GAME", 60, 80);
};

const drawBall = () => {
  ctx.fillStyle = MAIN_COLOR;
  // ctx.arc(gameState.ball.x, gameState.ball.y, BALL_RADIUS, 0, 2 * Math.PI);
  ctx.fillRect(
    gameState.ball.x,
    gameState.ball.y,
    gameState.ball.width,
    gameState.ball.height
  );
  ctx.fill();
};

const drawBat = (batDirection) => {
  ctx.fillStyle = MAIN_COLOR;
  if (batDirection === BAT_SIDE.left) {
    ctx.fillRect(
      gameState.batLeft.x,
      gameState.batLeft.y,
      BAT_WIDTH,
      BAT_HEIGHT
    );
  } else {
    ctx.fillRect(
      gameState.batRight.x,
      gameState.batRight.y,
      BAT_WIDTH,
      BAT_HEIGHT
    );
  }
};

const resetBall = () => {
  // console.log("reset ball");
  gameState.ball.paused = false;
  gameState.ball.x = INITIAL_BALL_STATE.x;
  gameState.ball.y = randomiseBallLocation()[0];
  gameState.ball.angle = randomiseBallLocation()[1];
  gameState.ball.velocity = INITIAL_BALL_STATE.velocity;
};

const checkScores = () => {
  if (gameState.score.player1 >= WIN_SCORE) {
    stopAnimation();
    showEndScreen();
    gameState.phase = PHASE.END;
    resultText.innerHTML = "YOU WIN!!!";
  } else if (gameState.score.player2 >= WIN_SCORE) {
    stopAnimation();
    showEndScreen();
    gameState.phase = PHASE.END;
    resultText.innerHTML = "YOU LOSE!!!";
  }
};

const collisionDetection = () => {
  if (gameState.phase == PHASE.GAME) {
    // if (gameState.batLeft.y > GAME_HEIGHT || gameState.batLeft.y < 0) {
    //   gameState.batLeft.speed = -gameState.batLeft.speed;
    // }
    // if (gameState.batRight.y > GAME_HEIGHT || gameState.batRight.y < 0) {
    //   gameState.batRight.speed = -gameState.batRight.speed;
    // }
    if (gameState.ball.x < 0 || gameState.ball.x > GAME_WIDTH) {
      // BALL MOVES OUTSIDE LEFT OR RIGHT
      if (gameState.ball.x < 0 && !gameState.ball.paused) {
        gameState.score.player2 += 1;
        gameState.ball.paused = true;
        playBlip();
        makeDelay(1000, resetBall);
      }
      if (gameState.ball.x > GAME_WIDTH && !gameState.ball.paused) {
        gameState.score.player1 += 1;
        gameState.ball.paused = true;
        playBlip();
        makeDelay(1000, resetBall);
      }
    }
    if (gameState.ball.y > GAME_HEIGHT - 10 || gameState.ball.y < 10) {
      // BALL BOUNCES OFF TOP OR BOTTOM
      playBlip();
      gameState.ball.velocity = -gameState.ball.velocity;
      gameState.ball.angle = -gameState.ball.angle;
    }
    if (
      // BALL HITS LEFT BAT
      gameState.ball.x < gameState.batLeft.x + BAT_WIDTH &&
      gameState.ball.x > gameState.batLeft.x &&
      gameState.ball.y < gameState.batLeft.y + BAT_HEIGHT &&
      gameState.ball.y > gameState.batLeft.y
    ) {
      playBlip();
      gameState.ball.velocity = -gameState.ball.velocity;
    }
    if (
      // BALL HITS RIGHT BAT
      gameState.ball.x < gameState.batRight.x + BAT_WIDTH &&
      gameState.ball.x > gameState.batRight.x &&
      gameState.ball.y < gameState.batRight.y + BAT_HEIGHT &&
      gameState.ball.y > gameState.batRight.y
    ) {
      playBlip();
      gameState.ball.velocity = -gameState.ball.velocity;
    }

    // console.log(gameState.ball.velocity);
    // console.log(gameState.ball.angle);
    if (
      gameState.ball.dx > 0 &&
      gameState.ball.dy < 0 &&
      gameState.batRight.y > gameState.ball.y
    ) {
      gameState.batRight.speed = -INITIAL_RIGHT_BAT_STATE.speed;
    } else if (
      gameState.ball.dx > 0 &&
      gameState.ball.dy > 0 &&
      gameState.batRight.y < gameState.ball.y
    ) {
      gameState.batRight.speed = INITIAL_RIGHT_BAT_STATE.speed;
    }

    checkScores();
  }
};

const resetElements = () => {
  // console.log("reset");
  gameState = cloneDeep(makeInitialGameState());
};

const drawBackground = () => {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const makeDelay = (timeDelay, fn) => {
  setTimeout(() => {
    fn();
  }, timeDelay);
};

const moveElements = () => {
  if (gameState.phase == PHASE.GAME) {
    const [dx, dy] = getDisplacement(
      gameState.ball.velocity,
      gameState.ball.angle
    );
    gameState.ball.dx = dx;
    gameState.ball.dy = dy;
    gameState.ball.x = gameState.ball.x + dx;
    gameState.ball.y = gameState.ball.y + dy;

    if (
      // STOP LEFT BAT GOING OFF SCREEN
      BAT_HEIGHT + gameState.batLeft.y >
      GAME_HEIGHT
    ) {
      gameState.batLeft.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (gameState.batLeft.y < 0) {
      gameState.batLeft.y = 0;
    } else {
      gameState.batLeft.y = gameState.batLeft.y + gameState.batLeft.speed;
    }

    if (
      // STOP RIGHT BAT GOING OFF SCREEN
      BAT_HEIGHT + gameState.batRight.y >
      GAME_HEIGHT
    ) {
      gameState.batRight.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (gameState.batRight.y < 0) {
      gameState.batRight.y = 0;
    } else {
      gameState.batRight.y = gameState.batRight.y + gameState.batRight.speed;
    }

    gameState.batRight.y = gameState.batRight.y + gameState.batRight.speed;
  }
};

const moveBat = (side, direction) => {
  // console.log("moveBat: ", side, direction);
  // console.log("gameState.batLeft.y: ", gameState.batLeft.y);
  // console.log("BAT_HEIGHT: ", BAT_HEIGHT);
  // console.log("GAME_HEIGHT: ", GAME_HEIGHT);
  if (side === "LEFT") {
    if (direction === "DOWN") {
      gameState.batLeft.speed = INITIAL_LEFT_BAT_STATE.speed;
    } else if (direction === "UP") {
      gameState.batLeft.speed = -INITIAL_LEFT_BAT_STATE.speed;
    }
  }
  // else if (side === "RIGHT") {
  //   if (direction === "DOWN") {
  //     gameState.batRight.speed = INITIAL_RIGHT_BAT_STATE.speed;
  //   } else if (direction === "UP") {
  //     gameState.batRight.speed = -INITIAL_RIGHT_BAT_STATE.speed;
  //   }
  // }
};

const stopBat = ({ key }) => {
  if (key === INPUT.DOWN) {
    gameState.batLeft.downPressed = false;
  } else if (key === INPUT.UP) {
    gameState.batLeft.upPressed = false;
  }
  if (!gameState.batLeft.upPressed && !gameState.batLeft.downPressed) {
    gameState.batLeft.speed = 0;
  }

  // if (key === "p" || "l") {
  //   gameState.batRight.speed = 0;
  // }
};

const drawStartElements = () => {
  clearCanvas();
  drawBackground();
  drawTitle();
};

const drawGameElements = () => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  drawBall();
  drawBat(BAT_SIDE.left);
  drawBat(BAT_SIDE.right);
  drawScore();
};

const gameLoop = () => {
  moveElements();
  drawGameElements();
  collisionDetection();
  animationRequest = requestAnimationFrame(gameLoop);
};

const init = () => {
  gameCanvas = document.getElementById("game") as HTMLCanvasElement;
  ctx = gameCanvas.getContext("2d");
  drawStartElements();
  gameState.phase = PHASE.GAME;
  if (!animationRequest) {
    startAnimation();
  }
};

const startAnimation = () => {
  // console.log("start animation");
  animationRequest = requestAnimationFrame(gameLoop);
};

const stopAnimation = () => {
  // console.log("stop animation");
  resetElements();
  cancelAnimationFrame(animationRequest);
};

const detectKeyPress = ({ key }) => {
  if (gameState.phase == PHASE.GAME) {
    if (key === INPUT.UP) {
      moveBat("LEFT", "UP");
      gameState.batLeft.upPressed = true;
    } else if (key === INPUT.DOWN) {
      moveBat("LEFT", "DOWN");
      gameState.batLeft.downPressed = true;
    } else if (key === "p") {
      moveBat("RIGHT", "UP");
      gameState.batRight.downPressed = true;
    } else if (key === "l") {
      moveBat("RIGHT", "DOWN");
      gameState.batRight.downPressed = true;
    }
  }
};

document.addEventListener("keydown", (e) => {
  // console.log("key down", e);
  detectKeyPress(e);
});
document.addEventListener("keyup", (e) => {
  // console.log("key up", e);
  stopBat(e);
});

const hideStartScreen = () => {
  startScreen.classList.add("hide");
};

const showStartScreen = () => {
  startScreen.classList.remove("hide");
};

const hideEndScreen = () => {
  endScreen.classList.add("hide");
};

const showEndScreen = () => {
  endScreen.classList.remove("hide");
};

const startButton = document.getElementsByClassName("startButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];
const startScreen = document.getElementById("startScreen");
const endScreen = document.getElementById("endScreen");
const resultText = document.getElementById("resultText");

startButton.addEventListener("mousedown", (e) => {
  // console.log("start");
  init();
  hideStartScreen();
});

restartButton.addEventListener("mousedown", (e) => {
  // console.log("restart");
  init();
  hideEndScreen();
});
