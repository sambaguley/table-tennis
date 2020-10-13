import { ctx } from "../gameControl/gameControl";
import { gameState, INITIAL_LEFT_BAT_STATE } from "../gameControl/gameState";

import {
  DIRECTION,
  BAT_HEIGHT,
  BAT_WIDTH,
  COLOURS,
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

export const moveBat = (side: DIRECTION, direction: DIRECTION): void => {
  if (side === DIRECTION.Left) {
    if (direction === DIRECTION.Down) {
      gameState.batLeft.speed = INITIAL_LEFT_BAT_STATE.speed;
    } else if (direction === DIRECTION.Up) {
      gameState.batLeft.speed = -INITIAL_LEFT_BAT_STATE.speed;
    }
  }
};
