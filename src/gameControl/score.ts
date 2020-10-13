import { WIN_SCORE, PHASE } from "../common/gameConstants";
import { TEXT } from "../common/gameText";
import { resultText } from "./htmlElements";
import { gameState } from "./gameState";
import { stopAnimation, showEndScreen } from "./gameControl";

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
