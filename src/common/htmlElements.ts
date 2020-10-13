import { HTML_ELEMENTS } from "./gameConstants";

export const startButton = document.getElementsByClassName(
  HTML_ELEMENTS.START_BUTTON
)[0];
export const restartButton = document.getElementsByClassName(
  HTML_ELEMENTS.RESTART_BUTTON
)[0];
export const startScreen = document.getElementById(HTML_ELEMENTS.START_SCREEN);
export const endScreen = document.getElementById(HTML_ELEMENTS.END_SCREEN);
export const resultText = document.getElementById(HTML_ELEMENTS.RESULT_TEXT);
export const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
