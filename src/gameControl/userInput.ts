import { startButton, restartButton } from "./htmlElements";

import {
  detectKeyPress,
  stopBat,
  init,
  hideStartScreen,
  hideEndScreen,
} from "./gameControl";

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
