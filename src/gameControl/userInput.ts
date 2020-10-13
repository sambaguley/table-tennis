import { startButton, restartButton } from "../common/htmlElements";
import { DIRECTION, INPUT, PHASE } from "../common/gameConstants";
import { init, stopAnimation, playerBat } from "./gameControl";
import { hideStartScreen, hideEndScreen } from "../screens/screenControl";
import { gameState } from "./gameState";

const detectKeyPress = ({ key }: { key: string }): void => {
  if (gameState.phase == PHASE.GAME) {
    if (key === INPUT.UP) {
      playerBat.changeDirection(DIRECTION.Up);
    } else if (key === INPUT.DOWN) {
      playerBat.changeDirection(DIRECTION.Down);
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
    playerBat.stop(e);
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
