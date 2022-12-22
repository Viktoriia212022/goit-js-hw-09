
const onStart = document.querySelector('button[data-start]');
const onStop = document.querySelector('button[data-stop]');
const onBody = document.querySelector('body');

onStart.addEventListener('click', changeColor);
onStop.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// changeColor();
// stopChangeColor();


function changeColor() {
  onStart.setAttribute('disabled', 'true');
  onStop.removeAttribute('disabled');
  timer = setInterval(() => {
    onBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopChangeColor() {
  onStart.removeAttribute('disabled');
  onStop.setAttribute('disabled', 'true');
  clearInterval(timer);
}