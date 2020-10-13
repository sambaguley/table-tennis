import { ctx } from "../gameControl/gameControl";

import {
  GAME_WIDTH,
  GAME_HEIGHT,
  COLOURS,
  VERSION_NUMBER,
  FONTS,
} from "../common/gameConstants";

export const clearCanvas = () => {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};

export const drawCenterLine = (): void => {
  ctx.strokeStyle = COLOURS.MAIN;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(GAME_WIDTH / 2, 0);
  ctx.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
  ctx.stroke();
};

export const drawVersionNumber = (): void => {
  ctx.fillStyle = COLOURS.white;
  ctx.font = FONTS.SMALL;
  ctx.textAlign = "left";
  ctx.fillText(`Version: ${VERSION_NUMBER}`, 5, 15);
};

export const drawBackground = (): void => {
  ctx.fillStyle = COLOURS.BACKGROUND;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
};
