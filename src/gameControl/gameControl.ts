import { DIRECTION, PHASE } from "../common/gameConstants";
import { gameCanvas } from "../common/htmlElements";
import { initUserInput } from "./userInput";
import { gameState, resetElements } from "./gameState";
import { collisionDetection } from "../collision/collision";
import { drawBat } from "../elements/bat";
import Ball from "../elements/ball";
import {
  clearCanvas,
  drawCenterLine,
  drawVersionNumber,
  drawBackground,
} from "../elements/table";
import { drawScore } from "./score";
import { moveElements } from "../movement/movement";

let animationRequest;
export let ball;
export let ctx;

const drawGameElements = (): void => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  ball.draw();
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
  ball = new Ball();
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

initUserInput();
