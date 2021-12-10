function randomColors() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

function colorPalette() {
  const colors = document.getElementsByClassName('color');
  colors[0].style.backgroundColor = 'rgb(0,0,0)';
  colors[0].classList.add('selected');
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColors();
  }
}
colorPalette();

function selectingColor() {
  const color = document.getElementsByClassName('color');
  function selectedColor(event) {
    for (let i = 0; i < color.length; i += 1) {
      if (event.target.classList.contains('color')) {
        color[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  }
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', selectedColor);
  }
}
selectingColor();

function generateBoard(quadros) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let linhas = 0; linhas < quadros; linhas += 1) {
    const linhaUL = document.createElement('ul');
    for (let colunas = 0; colunas < quadros; colunas += 1) {
      const colunaLI = document.createElement('li');
      colunaLI.classList.add('pixel');
      colunaLI.style.backgroundColor = 'rgb(255, 255, 255)';
      linhaUL.appendChild(colunaLI);
    }
    pixelBoard.appendChild(linhaUL);
  }
}
generateBoard(5);

function removeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function generateBoardButton() {
  const button = document.getElementById('generate-board');
  function returnInput() {
    const input = document.getElementById('board-size');
    let valor = input.value;
    if (valor === '' || valor < 0) {
      valor = alert('Board inválido!');
    }
    if (valor < 5) {
      valor = 5;
    }
    if (valor > 50) {
      valor = 50;
    }
    removeBoard();
    generateBoard(valor);
  }
  button.addEventListener('click', returnInput);
}
generateBoardButton();

function paintingbox() {
  function clickPaint(event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selectedColor;
    }
  }
  document.addEventListener('click', clickPaint);
}
paintingbox();

function eraseAll() {
  const eraseButton = document.getElementById('clear-board');
  function eraseClick() {
    const pixelBox = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelBox.length; i += 1) {
      pixelBox[i].style.backgroundColor = 'rgb(255,255,255)';
    }
  }
  eraseButton.addEventListener('click', eraseClick);
}
eraseAll();
