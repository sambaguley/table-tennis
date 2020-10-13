import { gameState, INITIAL_RIGHT_BAT_STATE } from "../gameControl/gameState";
import { checkScores } from "../gameControl/score";
import { ball } from "../gameControl/gameControl";
import { blip } from "../sound/sound";
import { makeDelay } from "../common/utils";

import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BAT_HEIGHT,
  BAT_WIDTH,
  PHASE,
} from "../common/gameConstants";

const randomAngle = (): number => Math.random() * 0.5 - 0.25;

const reflectAngle = (): number => ball.angle + Math.PI + randomAngle();

const playBlip = () => {
  blip.play();
};

export const collisionDetection = (): void => {
  if (gameState.phase == PHASE.GAME) {
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
      ball.x < gameState.batLeft.x + BAT_WIDTH &&
      ball.x > gameState.batLeft.x &&
      ball.y < gameState.batLeft.y + BAT_HEIGHT &&
      ball.y > gameState.batLeft.y
    ) {
      playBlip();
      ball.angle = reflectAngle();
    }
    if (
      // BALL HITS RIGHT BAT
      ball.x < gameState.batRight.x + BAT_WIDTH &&
      ball.x > gameState.batRight.x &&
      ball.y < gameState.batRight.y + BAT_HEIGHT &&
      ball.y > gameState.batRight.y
    ) {
      playBlip();
      ball.angle = reflectAngle();
    }

    // OPPONENT BASIC AI
    if (ball.dx > 0 && ball.dy < 0 && gameState.batRight.y > ball.y) {
      gameState.batRight.speed = -INITIAL_RIGHT_BAT_STATE.speed;
    } else if (ball.dx > 0 && ball.dy > 0 && gameState.batRight.y < ball.y) {
      gameState.batRight.speed = INITIAL_RIGHT_BAT_STATE.speed;
    }
    checkScores();
  }
};
