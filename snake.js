
class Snake {
  constructor() {
    this.position = [[20, 20], [20, 19], [20, 18]];
    this.size = 3;
    this._direction = 'DIRECTION_RIGHT';
    this.alive = true;
  }

  set direction(dir) {
    this._direction = dir;
  }

  get direction() {
    return this._direction;
  }

  move() {
    let head = this.position[0].slice();

    switch (this.direction) {
      case 'DIRECTION_RIGHT':
        head[1] += 1;

        break;
      case 'DIRECTION_LEFT':
        head[1] -= 1;
        break;
      case 'DIRECTION_UP':
        head[0] -= 1;
        break;
      case 'DIRECTION_DOWN':
        head[0] += 1;
        break;
    }
    console.log(head)

    document.querySelector(`.row:nth-child(${head[0]}) > .cell:nth-child(${head[1]})`).classList.add('active');
  }

}

class Food {
  constructor() {
    this.position = [];
    this.present = false;
  }
}

class Board {
  constructor(size, el) {
    this.boardSize = size;
    this.el = el;
  }

  render() {
    for(let i = 0; i < this.boardSize; i++) {
      let row = document.createElement('div');
      row.classList.add('row')
      this.el.appendChild(row)
      for(let x = 0; x < this.boardSize; x++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        row.appendChild(cell)
      }
    }
  }
}

class Game {
  constructor (snake, food, board) {
    this.snake = snake;
    this.food = food;
    this.board = board;
  }

  render() {
    this.board.render();
    this.keyPressListener();
    this.snake.move();
  }

  keyPressListener() {
    document.addEventListener('keydown', (key) => {
      switch(key.which) {
        case 37:
          this.snake.direction = 'DIRECTION_LEFT';
          break;
        case 38:
          this.snake.direction = 'DIRECTION_UP';
          break;
        case 39:
          this.snake.direction = 'DIRECTION_RIGHT';
          break;
        case 40:
          this.snake.direction = 'DIRECTION_DOWN';
          break;
      }
      this.snake.move()
    })

  }
}

let game = new Game(
  new Snake(),
  new Food(),
  new Board(40, document.querySelector('#gameBoard'))
);

game.render();