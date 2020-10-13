import { gameState } from "../gameControl/gameState";
import { ball } from "../gameControl/gameControl";
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
      BAT_HEIGHT + gameState.batLeft.y >
      GAME_HEIGHT
    ) {
      gameState.batLeft.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (gameState.batLeft.y < 0) {
      gameState.batLeft.y = 0;
    } else {
      gameState.batLeft.y = gameState.batLeft.y + gameState.batLeft.speed;
    }

    if (
      // STOP RIGHT BAT GOING OFF SCREEN
      BAT_HEIGHT + gameState.batRight.y >
      GAME_HEIGHT
    ) {
      gameState.batRight.y = GAME_HEIGHT - BAT_HEIGHT;
    } else if (gameState.batRight.y < 0) {
      gameState.batRight.y = 0;
    } else {
      gameState.batRight.y = gameState.batRight.y + gameState.batRight.speed;
    }

    gameState.batRight.y = gameState.batRight.y + gameState.batRight.speed;
  }
};
