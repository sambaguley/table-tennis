import { gameState } from "../gameControl/gameState";
import { ball, playerBat, opponentBat } from "../gameControl/gameControl";
import { playBlip } from "../sound/sound";
import { makeDelay } from "../common/utils";

import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BAT_HEIGHT,
  BAT_WIDTH,
} from "../common/gameConstants";

const randomAngle = (): number => Math.random() * 0.5 - 0.25;

const reflectAngle = (): number => ball.angle + Math.PI + randomAngle();

export const collisionDetection = (): void => {
  // REFACTOR TO MAKE COLLISIONS GENERIC
  if (ball.x < 0 || ball.x > GAME_WIDTH) {
    // BALL MOVES OUTSIDE LEFT OR RIGHT
    if (ball.x < 0 && !ball.paused) {
      if (ball.speed < ball.maxSpeed) {
        ball.speed = ball.speed + ball.acceleration;
      }
      gameState.score.player2 += 1;
      ball.paused = true;
      playBlip();
      makeDelay(1000, ball.reset);
    }
    if (ball.x > GAME_WIDTH && !ball.paused) {
      if (ball.speed < ball.maxSpeed) {
        ball.speed = ball.speed + ball.acceleration;
      }
      gameState.score.player1 += 1;
      ball.paused = true;
      playBlip();
      makeDelay(1000, ball.reset);
    }
  }
  if (ball.y > GAME_HEIGHT - 10 || ball.y < 10) {
    // BALL BOUNCES OFF TOP OR BOTTOM
    playBlip();
    ball.angle = ball.angle + Math.PI / 2;
  }
  if (
    // BALL HITS LEFT BAT
    ball.x < playerBat.x + BAT_WIDTH &&
    ball.x > playerBat.x &&
    ball.y < playerBat.y + BAT_HEIGHT &&
    ball.y > playerBat.y
  ) {
    playBlip();
    ball.angle = reflectAngle();
  }
  if (
    // BALL HITS RIGHT BAT
    ball.x < opponentBat.x + BAT_WIDTH &&
    ball.x > opponentBat.x &&
    ball.y < opponentBat.y + BAT_HEIGHT &&
    ball.y > opponentBat.y
  ) {
    playBlip();
    ball.angle = reflectAngle();
  }
};
