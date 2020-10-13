import {
  WIN_SCORE,
  PHASE,
  COLOURS,
  GAME_WIDTH,
  FONTS,
} from "../common/gameConstants";
import { TEXT } from "../common/gameText";
import { resultText } from "../common/htmlElements";
import { gameState } from "./gameState";
import { stopAnimation, ctx } from "./gameControl";
import { showEndScreen } from "../screens/screenControl";

export const checkScores = (): void => {
  if (gameState.score.player1 >= WIN_SCORE) {
    stopAnimation();
    showEndScreen();
    gameState.phase = PHASE.END;
    resultText.innerHTML = TEXT.WIN;
  } else if (gameState.score.player2 >= WIN_SCORE) {
    stopAnimation();
    showEndScreen();
    gameState.phase = PHASE.END;
    resultText.innerHTML = TEXT.LOSE;
  }
};

export const drawScore = (): void => {
  ctx.strokeStyle = COLOURS.white;
  ctx.font = FONTS.SCORE;
  ctx.textAlign = "right";
  ctx.fillText(gameState.score.player1, GAME_WIDTH / 2 - 20, 60);
  ctx.textAlign = "left";
  ctx.fillText(gameState.score.player2, GAME_WIDTH / 2 + 20, 60);
};
