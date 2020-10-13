import {
  DIRECTION,
  GAME_HEIGHT,
  BAT_HEIGHT,
  PHASE,
} from "../common/gameConstants";

import { startScreen, endScreen, gameCanvas } from "./htmlElements";

import { initUserInput } from "./userInput";

import { gameState, resetElements } from "./gameState";

import { collisionDetection } from "../collision/collision";

import { drawBat } from "../elements/bat";
import { drawBall } from "../elements/ball";
import {
  clearCanvas,
  drawCenterLine,
  drawVersionNumber,
  drawBackground,
} from "../elements/table";

import { drawScore } from "./score";

let animationRequest;
export let ctx;
export let blip;

blip = new Audio("./blip.wav");

const getDisplacement = (speed: number, angle: number): [number, number] => {
  const dy = speed * Math.cos(angle);
  const dx = speed * Math.sin(angle);
  return [dx, dy];
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
