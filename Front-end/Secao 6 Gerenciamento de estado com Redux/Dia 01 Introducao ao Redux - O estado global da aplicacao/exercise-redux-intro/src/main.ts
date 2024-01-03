import { previousColor, nextColor, randomColor } from "./redux/actions";
import store from "./redux/store";

const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;
const containerDiv = document.getElementById('container') as HTMLDivElement;
const colorSpan = document.getElementById('value') as HTMLSpanElement;

btnPrevious.addEventListener('click', () => {
  store.dispatch(previousColor());
});

btnNext.addEventListener('click', () => {
  store.dispatch(nextColor());
});

btnRandom.addEventListener('click', () => {
  store.dispatch(randomColor());
})

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorSpan.innerHTML = colors[index];
  containerDiv.style.backgroundColor = colors[index];
})