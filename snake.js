let app = {
  gameBoardSize: 40,
  gamePoints: 0,
  gameSpeed: 100
};

class Snake {
  constructor() {
    this.position = [[20, 20], [20, 19], [20, 18]];
    this.size = 3;
    this.direction = 'DIRECTION_RIGHT';
    this.alive = true;
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
      this.el.appendChild(row)
    }
  }
}
let el = document.querySelector('#gameBoard');

let board = new Board(40, el);
board.render()