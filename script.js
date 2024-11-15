const area = document.querySelector('.area');
const btnNew = document.querySelector('.btn-new');
const btnClear = document.querySelector('.btn-clear');
let size = 10;
let drawing = false;

document.addEventListener('mousedown', () => (drawing = true));
document.addEventListener('mouseup', () => (drawing = false));

area.addEventListener('mouseover', (event) => {
  if (drawing && event.target.classList.contains('square')) {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
    event.target.style.backgroundColor = color;
  }
});

function createGrid(size) {
  const squareSize = 20;
  const width = size * squareSize;
  area.style.width = `${width}px`;

  area.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    area.appendChild(square);
  }
}

btnNew.addEventListener('click', () => {
  size = parseInt(prompt('ENTER GRID SIZE'), 10);

  while (isNaN(size) || size > 100 || size <= 0) {
    size = parseInt(prompt('Size must be a number between 1 and 100!'), 10);
  }

  createGrid(size);
});

btnClear.addEventListener('click', () => {
  createGrid(size);
});

createGrid(size);
