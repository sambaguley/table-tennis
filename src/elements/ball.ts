import { ctx } from "../gameControl/gameControl";
import {
  gameState,
  INITIAL_BALL_STATE,
  randomiseBallAngle,
} from "../gameControl/gameState";

import { COLOURS, GAME_HEIGHT } from "../common/gameConstants";

export const drawBall = (): void => {
  ctx.fillStyle = COLOURS.MAIN;
  ctx.fillRect(
    gameState.ball.x,
    gameState.ball.y,
    gameState.ball.width,
    gameState.ball.height
  );
  ctx.fill();
};

export const resetBall = (): void => {
  gameState.ball.paused = false;
  gameState.ball.x = INITIAL_BALL_STATE.x;
  gameState.ball.y = GAME_HEIGHT / 2;
  gameState.ball.angle = randomiseBallAngle();
};
