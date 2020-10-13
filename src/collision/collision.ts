import { gameState, INITIAL_RIGHT_BAT_STATE } from "../gameControl/gameState";
import { checkScores } from "../gameControl/score";
import { blip } from "../sound/sound";
import { makeDelay } from "../common/utils";

import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BAT_HEIGHT,
  BAT_WIDTH,
  PHASE,
} from "../common/gameConstants";

import { resetBall } from "../elements/ball";

const randomAngle = (): number => Math.random() * 0.5 - 0.25;

const reflectAngle = (): number =>
  gameState.ball.angle + Math.PI + randomAngle();

const playBlip = () => {
  blip.play();
};

export const collisionDetection = (): void => {
  if (gameState.phase == PHASE.GAME) {
    if (gameState.ball.x < 0 || gameState.ball.x > GAME_WIDTH) {
      // BALL MOVES OUTSIDE LEFT OR RIGHT
      if (gameState.ball.x < 0 && !gameState.ball.paused) {
        if (gameState.ball.speed < gameState.ball.maxSpeed) {
          gameState.ball.speed =
            gameState.ball.speed + gameState.ball.acceleration;
        }
        gameState.score.player2 += 1;
        gameState.ball.paused = true;
        playBlip();
        makeDelay(1000, resetBall);
      }
      if (gameState.ball.x > GAME_WIDTH && !gameState.ball.paused) {
        if (gameState.ball.speed < gameState.ball.maxSpeed) {
          gameState.ball.speed =
            gameState.ball.speed + gameState.ball.acceleration;
        }
        gameState.score.player1 += 1;
        gameState.ball.paused = true;
        playBlip();
        makeDelay(1000, resetBall);
      }
    }
    if (gameState.ball.y > GAME_HEIGHT - 10 || gameState.ball.y < 10) {
      // BALL BOUNCES OFF TOP OR BOTTOM
      playBlip();
      gameState.ball.angle = gameState.ball.angle + Math.PI / 2;
    }
    if (
      // BALL HITS LEFT BAT
      gameState.ball.x < gameState.batLeft.x + BAT_WIDTH &&
      gameState.ball.x > gameState.batLeft.x &&
      gameState.ball.y < gameState.batLeft.y + BAT_HEIGHT &&
      gameState.ball.y > gameState.batLeft.y
    ) {
      playBlip();
      gameState.ball.angle = reflectAngle();
    }
    if (
      // BALL HITS RIGHT BAT
      gameState.ball.x < gameState.batRight.x + BAT_WIDTH &&
      gameState.ball.x > gameState.batRight.x &&
      gameState.ball.y < gameState.batRight.y + BAT_HEIGHT &&
      gameState.ball.y > gameState.batRight.y
    ) {
      playBlip();
      gameState.ball.angle = reflectAngle();
    }

    // OPPONENT BASIC AI
    if (
      gameState.ball.dx > 0 &&
      gameState.ball.dy < 0 &&
      gameState.batRight.y > gameState.ball.y
    ) {
      gameState.batRight.speed = -INITIAL_RIGHT_BAT_STATE.speed;
    } else if (
      gameState.ball.dx > 0 &&
      gameState.ball.dy > 0 &&
      gameState.batRight.y < gameState.ball.y
    ) {
      gameState.batRight.speed = INITIAL_RIGHT_BAT_STATE.speed;
    }
    checkScores();
  }
};
