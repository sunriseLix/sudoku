import './less/main.less';
import MatrixToolkit from './util/toolkit';
const toolkit = new MatrixToolkit();

class Grid {
  constructor(container) {
    this.container = container;
  }
  build() {
    const matrix = toolkit.createRow();
    const cells = matrix.map(row => row.map(cell => {
      const span = document.createElement('span');
      span.innerHTML = cell;
      return span;
    }));
    console.log(cells);
    const divArray = cells.map(span => {
      const div = document.createElement('div');
      div.append(span);
      return div;
    });
    console.log(divArray);
    this.container.append(divArray);
  }
}

new Grid(document.querySelector('.grid')).build();