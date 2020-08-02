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

const INITIAL_BALL_STATE = {
  x: GAME_WIDTH / 2,
  y: GAME_HEIGHT / 2,
  speed: -4,
};

const INITIAL_LEFT_BAT_STATE = {
  x: BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 2,
};

const INITIAL_RIGHT_BAT_STATE = {
  x: GAME_WIDTH - BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 2,
};

const BACKGROUND_COLOR = "#333";
const MAIN_COLOR = "#0F0";

const INITIAL_GAME_STATE = {
  ball: {
    x: INITIAL_BALL_STATE.x,
    y: INITIAL_BALL_STATE.y,
    speed: INITIAL_BALL_STATE.speed,
  },
  batLeft: {
    x: INITIAL_LEFT_BAT_STATE.x,
    y: INITIAL_LEFT_BAT_STATE.y,
    speed: 0,
  },
  batRight: {
    x: INITIAL_RIGHT_BAT_STATE.x,
    y: INITIAL_RIGHT_BAT_STATE.y,
    speed: INITIAL_LEFT_BAT_STATE.speed,
  },
};

let gameState = INITIAL_GAME_STATE;

const clearCanvas = () => {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const drawBall = () => {
  ctx.beginPath();
  ctx.fillStyle = MAIN_COLOR;
  ctx.arc(gameState.ball.x, gameState.ball.y, BALL_RADIUS, 0, 2 * Math.PI);
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
  if (gameState.batLeft.y > GAME_HEIGHT || gameState.batLeft.y < 0) {
    gameState.batLeft.speed = -gameState.batLeft.speed;
  }
  if (gameState.batRight.y > GAME_HEIGHT || gameState.batRight.y < 0) {
    gameState.batRight.speed = -gameState.batRight.speed;
  }
  if (gameState.ball.x < 0) {
    gameState.ball.x = INITIAL_BALL_STATE.x;
  }
  if (gameState.ball.x > GAME_WIDTH) {
    gameState.ball.speed = -gameState.ball.speed;
  }
  if (
    gameState.ball.x < gameState.batLeft.x + BAT_WIDTH &&
    gameState.ball.x > gameState.batLeft.x &&
    gameState.ball.y < gameState.batLeft.y + BAT_HEIGHT &&
    gameState.ball.y > gameState.batLeft.y
  ) {
    gameState.ball.speed = -gameState.ball.speed;
  }
};

const resetElements = () => {
  gameState = INITIAL_GAME_STATE;
};

const drawBackground = () => {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const moveElements = () => {
  gameState.ball.x = gameState.ball.x + gameState.ball.speed;
  gameState.batLeft.y = gameState.batLeft.y + gameState.batLeft.speed;
  gameState.batRight.y = gameState.batRight.y - gameState.batRight.speed;
};

const movePlayerBat = (direction) => {
  if (direction === "DOWN") {
    gameState.batLeft.speed = INITIAL_LEFT_BAT_STATE.speed;
  } else if (direction === "UP") {
    gameState.batLeft.speed = -INITIAL_LEFT_BAT_STATE.speed;
  }
};

const stopPlayerBat = () => {
  gameState.batLeft.speed = 0;
};

const drawGameElements = () => {
  clearCanvas();
  drawBackground();
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
  if (key === "a") {
    movePlayerBat("UP");
  } else if (key === "z") {
    movePlayerBat("DOWN");
  }
};

document.addEventListener("keydown", (e) => {
  // console.log(e);
  detectKeyPress(e);
});
document.addEventListener("keyup", (e) => {
  // console.log(e);
  stopPlayerBat();
});

startButton.addEventListener("click", () => {
  startAnimation();
});

stopButton.addEventListener("click", () => {
  stopAnimation();
});

const gameTimer = () => {};
