import { startScreen, endScreen } from "../common/htmlElements";

export const hideStartScreen = (): void => {
  startScreen.classList.add("hide");
};

export const hideEndScreen = (): void => {
  endScreen.classList.add("hide");
};

export const showEndScreen = (): void => {
  endScreen.classList.remove("hide");
};
