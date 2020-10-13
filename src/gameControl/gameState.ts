import cloneDeep from "lodash/cloneDeep";

import { PHASE } from "../common/gameConstants";

export const initGameState = () => {
  return {
    phase: PHASE.START,
    score: {
      player1: 0,
      player2: 0,
    },
  };
};

export let gameState = cloneDeep(initGameState());

export const resetElements = (): void => {
  gameState = cloneDeep(initGameState());
};
