import { ctx } from "../gameControl/gameControl";
import { gameState } from "../gameControl/gameState";

import {
  DIRECTION,
  BAT_HEIGHT,
  BAT_WIDTH,
  COLOURS,
  GAME_HEIGHT,
  GAME_WIDTH,
  BAT_SIDE_MARGIN,
  INPUT,
} from "../common/gameConstants";

export const drawBat = (batDirection): void => {
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
