import { DIRECTION, PHASE } from "../common/gameConstants";
import { gameCanvas } from "../common/htmlElements";
import { initUserInput } from "./userInput";
import { gameState, resetElements } from "./gameState";
import { collisionDetection } from "../collision/collision";
import { moveOpponent } from "../ai/ai";
import Ball from "../elements/ball";
import Bat from "../elements/bat";
import {
  clearCanvas,
  drawCenterLine,
  drawVersionNumber,
  drawBackground,
} from "../elements/table";
import { drawScore, checkScores } from "./score";
import { moveElements } from "../movement/movement";

let animationRequest;
export let ball;
export let playerBat;
export let opponentBat;
export let ctx;

const drawGameElements = (): void => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  ball.draw();
  playerBat.draw();
  opponentBat.draw();
  drawScore();
  drawVersionNumber();
};

const gameLoop = (): void => {
  moveElements();
  moveOpponent();
  drawGameElements();
  collisionDetection();
  checkScores();
  animationRequest = requestAnimationFrame(gameLoop);
};

export const init = (): void => {
  ctx = gameCanvas.getContext("2d");
  ball = new Ball();
  playerBat = new Bat(DIRECTION.Left);
  opponentBat = new Bat(DIRECTION.Right);
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
