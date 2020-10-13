import {
  DIRECTION,
  GAME_WIDTH,
  GAME_HEIGHT,
  BAT_HEIGHT,
  BAT_WIDTH,
  INPUT,
  PHASE,
  COLOURS,
  VERSION_NUMBER,
  FONTS,
} from "../common/gameConstants";

import { startScreen, endScreen, gameCanvas } from "./htmlElements";

import { initUserInput } from "./userInput";

import {
  gameState,
  INITIAL_BALL_STATE,
  INITIAL_LEFT_BAT_STATE,
  randomiseBallAngle,
  resetElements,
} from "./gameState";

import { collisionDetection } from "../collision/collision";

let animationRequest;
let ctx;
export let blip;

blip = new Audio("./blip.wav");

const getDisplacement = (speed: number, angle: number): [number, number] => {
  const dy = speed * Math.cos(angle);
  const dx = speed * Math.sin(angle);
  return [dx, dy];
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const drawCenterLine = (): void => {
  ctx.strokeStyle = COLOURS.MAIN;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(GAME_WIDTH / 2, 0);
  ctx.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
  ctx.stroke();
};

const drawScore = (): void => {
  ctx.strokeStyle = COLOURS.white;
  ctx.font = FONTS.SCORE;
  ctx.textAlign = "right";
  ctx.fillText(gameState.score.player1, GAME_WIDTH / 2 - 20, 60);
  ctx.textAlign = "left";
  ctx.fillText(gameState.score.player2, GAME_WIDTH / 2 + 20, 60);
};

const drawVersionNumber = (): void => {
  ctx.fillStyle = COLOURS.white;
  ctx.font = FONTS.SMALL;
  ctx.textAlign = "left";
  ctx.fillText(`Version: ${VERSION_NUMBER}`, 5, 15);
};

const drawBall = (): void => {
  ctx.fillStyle = COLOURS.MAIN;
  ctx.fillRect(
    gameState.ball.x,
    gameState.ball.y,
    gameState.ball.width,
    gameState.ball.height
  );
  ctx.fill();
};

const drawBat = (batDirection): void => {
  ctx.fillStyle = COLOURS.MAIN;
  if (batDirection === DIRECTION.Left) {
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

export const resetBall = (): void => {
  gameState.ball.paused = false;
  gameState.ball.x = INITIAL_BALL_STATE.x;
  gameState.ball.y = GAME_HEIGHT / 2;
  gameState.ball.angle = randomiseBallAngle();
};

const drawBackground = (): void => {
  ctx.fillStyle = COLOURS.BACKGROUND;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

const moveElements = (): void => {
  if (gameState.phase == PHASE.GAME) {
    const [dx, dy] = getDisplacement(
      gameState.ball.speed,
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

export const moveBat = (side: DIRECTION, direction: DIRECTION): void => {
  if (side === DIRECTION.Left) {
    if (direction === DIRECTION.Down) {
      gameState.batLeft.speed = INITIAL_LEFT_BAT_STATE.speed;
    } else if (direction === DIRECTION.Up) {
      gameState.batLeft.speed = -INITIAL_LEFT_BAT_STATE.speed;
    }
  }
};

export const stopBat = ({ key }: { key: string }): void => {
  if (key === INPUT.DOWN) {
    gameState.batLeft.downPressed = false;
  } else if (key === INPUT.UP) {
    gameState.batLeft.upPressed = false;
  }
  if (!gameState.batLeft.upPressed && !gameState.batLeft.downPressed) {
    gameState.batLeft.speed = 0;
  }
};

const drawGameElements = (): void => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  drawBall();
  drawBat(DIRECTION.Left);
  drawBat(DIRECTION.Right);
  drawScore();
  drawVersionNumber();
};

const gameLoop = (): void => {
  moveElements();
  drawGameElements();
  collisionDetection();
  animationRequest = requestAnimationFrame(gameLoop);
};

export const init = (): void => {
  ctx = gameCanvas.getContext("2d");
  gameState.phase = PHASE.GAME;
  if (!animationRequest) {
    startAnimation();
  }
};

const startAnimation = (): void => {
  animationRequest = requestAnimationFrame(gameLoop);
};

export const stopAnimation = (): void => {
  resetElements();
  cancelAnimationFrame(animationRequest);
};

export const hideStartScreen = (): void => {
  startScreen.classList.add("hide");
};

export const hideEndScreen = (): void => {
  endScreen.classList.add("hide");
};

export const showEndScreen = (): void => {
  endScreen.classList.remove("hide");
};

initUserInput();
