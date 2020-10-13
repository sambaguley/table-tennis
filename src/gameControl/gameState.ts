import cloneDeep from "lodash/cloneDeep";

import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BAT_SIDE_MARGIN,
  PHASE,
} from "../common/gameConstants";

export const randomiseBallAngle = (): number => {
  const minAngle = 4;
  const angleSpread = 1;
  return minAngle + Math.random() * angleSpread;
};

export const INITIAL_BALL_STATE = {
  x: GAME_WIDTH / 2 - 5,
  y: GAME_HEIGHT / 2,
  width: 10,
  height: 10,
  speed: 6,
  acceleration: 0.2,
  maxSpeed: 8,
  angle: randomiseBallAngle(),
  dx: 0,
  dy: 0,
};

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
  const angle = randomiseBallAngle();
  return {
    phase: PHASE.START,
    ball: {
      x: INITIAL_BALL_STATE.x,
      y: GAME_HEIGHT / 2,
      width: INITIAL_BALL_STATE.width,
      height: INITIAL_BALL_STATE.height,
      speed: INITIAL_BALL_STATE.speed,
      acceleration: INITIAL_BALL_STATE.acceleration,
      maxSpeed: INITIAL_BALL_STATE.maxSpeed,
      angle: angle,
      paused: false,
      dy: 0,
      dx: 0,
    },
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
