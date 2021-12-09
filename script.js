const initialColor = document.getElementsByClassName('color')[0];
initialColor.classList.add('selected');

function colorPalette() {
  const colors = document.getElementsByClassName('color');
  colors[0].style.backgroundColor = 'rgb(0,0,0)';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'blue';
  colors[3].style.backgroundColor = 'green';
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
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', clickPaint);
  }
}
paintingbox();

function eraseAll() {
  const eraseButton = document.getElementById('clear-board');
  function eraseClick() {
    const pixelBox = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelBox.length; index += 1) {
      pixelBox[index].style.backgroundColor = 'rgb(255,255,255)';
    }
  }
  eraseButton.addEventListener('click', eraseClick);
}

eraseAll();
