function randomColors() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

const initialColor = document.getElementsByClassName('color')[0];
initialColor.classList.add('selected');

function colorPalette() {
  const colors = document.getElementsByClassName('color');
  colors[0].style.backgroundColor = 'rgb(0,0,0)';
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

function paintingbox() {
  const pixelBox = document.getElementsByClassName('pixel');
  function clickPaint(event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    if (event.target.style.backgroundColor !== selectedColor) {
      event.target.style.backgroundColor = selectedColor;
    }
  }
  for (let i = 0; i < pixelBox.length; i += 1) {
    pixelBox[i].addEventListener('click', clickPaint);
  }
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
