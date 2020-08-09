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
};

const INITIAL_LEFT_BAT_STATE = {
  x: BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 4,
};

const INITIAL_RIGHT_BAT_STATE = {
  x: GAME_WIDTH - BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 4,
};

const BACKGROUND_COLOR = "#333";
const MAIN_COLOR = "#CCC";

const makeInitialGameState = () => {
  const [ballY, angle] = randomiseBallLocation();
  return {
    ball: {
      x: INITIAL_BALL_STATE.x,
      y: ballY,
      width: INITIAL_BALL_STATE.width,
      height: INITIAL_BALL_STATE.height,
      velocity: INITIAL_BALL_STATE.velocity,
      angle: angle,
    },
    batLeft: {
      x: INITIAL_LEFT_BAT_STATE.x,
      y: INITIAL_LEFT_BAT_STATE.y,
      speed: 0,
    },
    batRight: {
      x: INITIAL_RIGHT_BAT_STATE.x,
      y: INITIAL_RIGHT_BAT_STATE.y,
      speed: 0,
    },
  };
};

let gameState = cloneDeep(makeInitialGameState());

const clearCanvas = () => {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const drawCenterLine = () => {
  ctx.strokeStyle = MAIN_COLOR;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(GAME_WIDTH / 2, 0);
  ctx.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
  ctx.stroke();
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

const collisionDetection = () => {
  // if (gameState.batLeft.y > GAME_HEIGHT || gameState.batLeft.y < 0) {
  //   gameState.batLeft.speed = -gameState.batLeft.speed;
  // }
  // if (gameState.batRight.y > GAME_HEIGHT || gameState.batRight.y < 0) {
  //   gameState.batRight.speed = -gameState.batRight.speed;
  // }
  if (gameState.ball.x < 0 || gameState.ball.x > GAME_WIDTH) {
    gameState.ball.x = INITIAL_BALL_STATE.x;
    gameState.ball.y = randomiseBallLocation()[0];
    gameState.ball.angle = randomiseBallLocation()[1];
    gameState.ball.velocity = INITIAL_BALL_STATE.velocity;
  }
  if (gameState.ball.y > GAME_HEIGHT - 10 || gameState.ball.y < 10) {
    gameState.ball.velocity = -gameState.ball.velocity;
    gameState.ball.angle = -gameState.ball.angle;
  }
  if (
    gameState.ball.x < gameState.batLeft.x + BAT_WIDTH &&
    gameState.ball.x > gameState.batLeft.x &&
    gameState.ball.y < gameState.batLeft.y + BAT_HEIGHT &&
    gameState.ball.y > gameState.batLeft.y
  ) {
    gameState.ball.velocity = -gameState.ball.velocity;
  }
  if (
    gameState.ball.x < gameState.batRight.x + BAT_WIDTH &&
    gameState.ball.x > gameState.batRight.x &&
    gameState.ball.y < gameState.batRight.y + BAT_HEIGHT &&
    gameState.ball.y > gameState.batRight.y
  ) {
    gameState.ball.velocity = -gameState.ball.velocity;
  }
};

const resetElements = () => {
  console.log("reset");
  gameState = cloneDeep(makeInitialGameState());
};

const drawBackground = () => {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const moveElements = () => {
  const [dx, dy] = getDisplacement(
    gameState.ball.velocity,
    gameState.ball.angle
  );
  gameState.ball.x = gameState.ball.x + dx;
  gameState.ball.y = gameState.ball.y + dy;

  gameState.batLeft.y = gameState.batLeft.y + gameState.batLeft.speed;
  gameState.batRight.y = gameState.batRight.y + gameState.batRight.speed;
};

const moveBat = (side, direction) => {
  console.log("moveBat: ", side, direction);
  if (side === "LEFT") {
    if (direction === "DOWN") {
      gameState.batLeft.speed = INITIAL_LEFT_BAT_STATE.speed;
    } else if (direction === "UP") {
      gameState.batLeft.speed = -INITIAL_LEFT_BAT_STATE.speed;
    }
  } else if (side === "RIGHT") {
    if (direction === "DOWN") {
      gameState.batRight.speed = INITIAL_RIGHT_BAT_STATE.speed;
    } else if (direction === "UP") {
      gameState.batRight.speed = -INITIAL_RIGHT_BAT_STATE.speed;
    }
  }
};

const stopBat = ({ key }) => {
  if (key === "q" || "a") {
    gameState.batLeft.speed = 0;
  }

  if (key === "p" || "l") {
    gameState.batRight.speed = 0;
  }
};

const drawGameElements = () => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  drawBall();
  drawBat(BAT_SIDE.left);
  drawBat(BAT_SIDE.right);
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
};

window.addEventListener("load", () => {
  init();
});

const startAnimation = () => {
  // console.log("start animation");
  animationRequest = requestAnimationFrame(gameLoop);
};

const stopAnimation = () => {
  // console.log("stop animation");
  resetElements();
  cancelAnimationFrame(animationRequest);
};

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");

const detectKeyPress = ({ key }) => {
  if (key === "q") {
    moveBat("LEFT", "UP");
  } else if (key === "a") {
    moveBat("LEFT", "DOWN");
  } else if (key === "p") {
    moveBat("RIGHT", "UP");
  } else if (key === "l") {
    moveBat("RIGHT", "DOWN");
  }
};

document.addEventListener("keydown", (e) => {
  // console.log(e);
  detectKeyPress(e);
});
document.addEventListener("keyup", (e) => {
  // console.log(e);
  stopBat(e);
});

startButton.addEventListener("click", () => {
  startAnimation();
});

stopButton.addEventListener("click", () => {
  stopAnimation();
});
