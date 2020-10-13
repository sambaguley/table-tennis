import { ctx } from "../gameControl/gameControl";

import { COLOURS, GAME_HEIGHT, GAME_WIDTH } from "../common/gameConstants";

const randomiseBallAngle = (): number => {
  const minAngle = 4;
  const angleSpread = 1;
  return minAngle + Math.random() * angleSpread;
};

const INITIAL_STATE = {
  x: GAME_WIDTH / 2 - 5,
  y: GAME_HEIGHT / 2,
  width: 10,
  height: 10,
  speed: 6,
  maxSpeed: 8,
  angle: randomiseBallAngle(),
  dx: 0,
  dy: 0,
  paused: false,
};

export default class Ball {
  height = 10;
  width = 10;
  acceleration = 0.2;
  maxSpeed = 8;
  x = INITIAL_STATE.x;
  y = INITIAL_STATE.y;
  speed = INITIAL_STATE.speed;
  angle = INITIAL_STATE.angle;
  dx = INITIAL_STATE.dx;
  dy = INITIAL_STATE.dy;
  paused = INITIAL_STATE.paused;

  draw = () => {
    ctx.fillStyle = COLOURS.MAIN;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();
  };

  reset = () => {
    this.paused = false;
    this.x = INITIAL_STATE.x;
    this.y = INITIAL_STATE.y;
    this.angle = randomiseBallAngle();
    this.speed = INITIAL_STATE.speed;
    this.dx = INITIAL_STATE.dx;
    this.dy = INITIAL_STATE.dy;
  };
}
