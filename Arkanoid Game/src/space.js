export const SPACE_WIDTH = 1000;
export const SPACE_HEIGHT = 600;

const CANVAS_ID = 'game';
const BACKGROUND_IMAGE_ID = 'background';

const SCORE_X = 20;
const SCORE_Y = SPACE_HEIGHT - 20;

const MESSAGE_X = Math.floor(SPACE_WIDTH / 2);
const MESSAGE_Y = Math.floor(SPACE_HEIGHT / 2);
export class Space {
  constructor(game) {
    this.game = game;

    this.backgroundImage = document.getElementById(BACKGROUND_IMAGE_ID);

    this.canvas = document.getElementById(CANVAS_ID);
    this.context = this.canvas.getContext('2d');
  }

  clear() {
    this.context.clearRect(0, 0, SPACE_WIDTH, SPACE_HEIGHT);
    this.context.drawImage(this.backgroundImage, 0, 0);

    this.context.fillStyle = 'white';
    this.context.font = '18px sans';
    this.context.textAlign = 'left';
    this.context.fillText(`Score: ${this.game.score}`, SCORE_X, SCORE_Y);
  }

  drawMessage(message, msg_x, msg_y) {
    this.context.font = '32px sans';
    this.context.textAlign = 'center';
    this.context.fillText(message, msg_x, msg_y);
  }

  drawGameOver() {
    this.drawMessage('GAME OVER', MESSAGE_X, MESSAGE_Y);
    this.drawMessage('Press Enter to Restart', MESSAGE_X, MESSAGE_Y + 40)
  }

  drawYouWin() {
    this.drawMessage('YOU WIN', MESSAGE_X, MESSAGE_Y);
    this.drawMessage('Press Enter to Restart', MESSAGE_X, MESSAGE_Y + 40)
  }
}
