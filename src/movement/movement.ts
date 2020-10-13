import { gameState } from "../gameControl/gameState";
import { ball, playerBat, opponentBat } from "../gameControl/gameControl";
import { PHASE, BAT_HEIGHT, GAME_HEIGHT } from "../common/gameConstants";

const getDisplacement = (speed: number, angle: number): [number, number] => {
  const dy = speed * Math.cos(angle);
  const dx = speed * Math.sin(angle);
  return [dx, dy];
};

export const moveElements = (): void => {
  if (gameState.phase == PHASE.GAME) {
    const [dx, dy] = getDisplacement(ball.speed, ball.angle);
    ball.dx = dx;
    ball.dy = dy;
    ball.x = ball.x + dx;
    ball.y = ball.y + dy;

    if (
      // STOP LEFT BAT GOING OFF SCREEN
      BAT_HEIGHT + playerBat.y >
      GAME_HEIGHT
    ) {
      playerBat.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (playerBat.y < 0) {
      playerBat.y = 0;
    } else {
      playerBat.move();
    }

    if (
      // STOP RIGHT BAT GOING OFF SCREEN
      BAT_HEIGHT + opponentBat.y >
      GAME_HEIGHT
    ) {
      opponentBat.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (opponentBat.y < 0) {
      opponentBat.y = 0;
    } else {
      opponentBat.y = opponentBat.y + opponentBat.speed;
    }

    opponentBat.y = opponentBat.y + opponentBat.speed;
  }
};
