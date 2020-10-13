import { DIRECTION } from "../common/gameConstants";
import { ball, opponentBat } from "../gameControl/gameControl";

export const moveOpponent = () => {
  if (ball.dx > 0 && ball.dy < 0 && opponentBat.y > ball.y) {
    opponentBat.changeDirection(DIRECTION.Up);
  } else if (ball.dx > 0 && ball.dy > 0 && opponentBat.y < ball.y) {
    opponentBat.changeDirection(DIRECTION.Down);
  }
};
