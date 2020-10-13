import { startButton, restartButton } from "./htmlElements";

import { DIRECTION, INPUT, PHASE } from "../common/gameConstants";

import {
  stopBat,
  init,
  hideStartScreen,
  hideEndScreen,
  moveBat,
  stopAnimation,
} from "./gameControl";

import { gameState } from "./gameState";

const detectKeyPress = ({ key }: { key: string }): void => {
  if (gameState.phase == PHASE.GAME) {
    if (key === INPUT.UP) {
      moveBat(DIRECTION.Left, DIRECTION.Up);
      gameState.batLeft.upPressed = true;
    } else if (key === INPUT.DOWN) {
      moveBat(DIRECTION.Left, DIRECTION.Down);
      gameState.batLeft.downPressed = true;
    } else if (key === INPUT.X) {
      stopAnimation();
    }
  }
};

export const initUserInput = () => {
  document.addEventListener("keydown", (e) => {
    detectKeyPress(e);
  });
  document.addEventListener("keyup", (e) => {
    stopBat(e);
  });

  startButton.addEventListener("mousedown", () => {
    init();
    hideStartScreen();
  });

  restartButton.addEventListener("mousedown", () => {
    init();
    hideEndScreen();
  });
};
