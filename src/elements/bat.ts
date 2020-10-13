import { ctx } from "../gameControl/gameControl";

import {
  DIRECTION,
  BAT_HEIGHT,
  BAT_WIDTH,
  COLOURS,
  INPUT,
  BAT_SIDE_MARGIN,
  GAME_WIDTH,
  GAME_HEIGHT,
} from "../common/gameConstants";

const INITIAL_STATE_LEFT = {
  x: BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 0,
  maxSpeed: 3,
};

const INITIAL_STATE_RIGHT = {
  x: GAME_WIDTH - BAT_SIDE_MARGIN,
  y: GAME_HEIGHT / 2,
  speed: 0,
  maxSpeed: 3,
};

export default class Bat {
  constructor(direction) {
    this.x =
      direction === DIRECTION.Left
        ? INITIAL_STATE_LEFT.x
        : INITIAL_STATE_RIGHT.x;
    this.y =
      direction === DIRECTION.Left
        ? INITIAL_STATE_LEFT.y
        : INITIAL_STATE_RIGHT.y;
    this.speed =
      direction === DIRECTION.Left
        ? INITIAL_STATE_LEFT.speed
        : INITIAL_STATE_RIGHT.speed;
  }

  x: number = null;
  y: number = null;
  speed: number = null;
  downPressed: boolean = false;
  upPressed: boolean = false;

  draw = (): void => {
    ctx.fillStyle = COLOURS.MAIN;
    ctx.fillRect(this.x, this.y, BAT_WIDTH, BAT_HEIGHT);
  };

  stop = ({ key }: { key: string }): void => {
    if (key === INPUT.DOWN) {
      this.downPressed = false;
    } else if (key === INPUT.UP) {
      this.upPressed = false;
    }
    if (!this.upPressed && !this.downPressed) {
      this.speed = 0;
    }
  };

  move = () => {
    this.y = this.y + this.speed;
  };

  changeDirection = (direction: DIRECTION): void => {
    if (direction === DIRECTION.Down) {
      this.speed = INITIAL_STATE_LEFT.maxSpeed;
      this.downPressed = true;
    } else if (direction === DIRECTION.Up) {
      this.speed = -INITIAL_STATE_LEFT.maxSpeed;
      this.upPressed = true;
    }
  };
}
