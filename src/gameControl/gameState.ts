import cloneDeep from "lodash/cloneDeep";

import {
  GAME_HEIGHT,
  PHASE,
  BAT_SIDE_MARGIN,
  GAME_WIDTH,
} from "../common/gameConstants";

export const INITIAL_LEFT_BAT_STATE = {
  x: BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 6,
};

export const INITIAL_RIGHT_BAT_STATE = {
  x: GAME_WIDTH - BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 3,
};

export const initGameState = () => {
  return {
    phase: PHASE.START,
    batLeft: {
      x: INITIAL_LEFT_BAT_STATE.x,
      y: INITIAL_LEFT_BAT_STATE.y,
      speed: 0,
      upPressed: false,
      downPressed: false,
    },
    batRight: {
      x: INITIAL_RIGHT_BAT_STATE.x,
      y: INITIAL_RIGHT_BAT_STATE.y,
      direction: null,
      speed: 0,
    },
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
