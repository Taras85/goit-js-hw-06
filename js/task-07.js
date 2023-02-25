const fontSizeControl = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');

fontSizeText.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', () => {
  fontSizeText.style.fontSize = `${fontSizeControl.value}px`;
});
