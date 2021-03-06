import { SPACE_WIDTH, SPACE_HEIGHT } from './space.js';

const PADDLE_IMAGE_ID = 'paddle';
const PADDLE_WIDTH = 150;
const PADDLE_HEIGHT = 25;
const PADDLE_SPEED = 10;
const PADDLE_BOTTOM = 100;
const PADDLE_X = Math.floor((SPACE_WIDTH - PADDLE_WIDTH) / 2);
const PADDLE_Y = SPACE_HEIGHT - PADDLE_BOTTOM;
const PADDLE_BEGIN = 0;
const PADDLE_END = SPACE_WIDTH - PADDLE_WIDTH;

export class Paddle {
  constructor() {
    this.image = document.getElementById(PADDLE_IMAGE_ID);
    this.reset();
  }

  reset() {
    this.x = PADDLE_X;
    this.y = PADDLE_Y;
    this.step = 0;
  }

  leftDown() {
    this.step = -PADDLE_SPEED;
  }

  rightDown() {
    this.step = PADDLE_SPEED;
  }

  keyUp() {
    this.step = 0;
  }

  update() {
    if (this.step !== 0) {
      this.x += this.step;

      if (this.x < PADDLE_BEGIN) {
        this.x = PADDLE_BEGIN;
        this.step = 0;
      } else if (this.x > PADDLE_END) {
        this.x = PADDLE_END;
        this.step = 0;
      }
    }
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.x,
      this.y,
      PADDLE_WIDTH,
      PADDLE_HEIGHT);
  }

  box() {
    return {
      lx: this.x,
      ly: this.y,
      rx: this.x + PADDLE_WIDTH,
      ry: this.y + PADDLE_HEIGHT
    };
  }
}
