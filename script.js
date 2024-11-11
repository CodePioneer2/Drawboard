const sketch = document.querySelector('.sketch');
const btnNewGrid = document.querySelector('.btn-new-grid');

function createRow(items) {
  //making row
  const row = document.createElement('div');
  for (let i = 0; i < items; i++) {
    createSquare(row);
  }
  //add it to sketchboard
  sketch.appendChild(row);
}

function createSquare(row) {
  //adding more stuff to row
  const div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';
    setTimeout(() => {
      event.target.style.backgroundColor = '';
    }, 1000);
  });
  row.appendChild(div);
}

function createGrid(x) {
  sketch.innerHTML = '';
  for (let i = 0; i < x; i++) {
    createRow(x);
  }
}

btnNewGrid.addEventListener('click', () => {
  let size = 0;
  size = prompt('ENTER GRID SIZE');
  while (size > 100) {
    size = prompt('Size needs to be smaller than 100!');
  }
  createGrid(size);
});
