import '../scss/main.scss';
import 'bootstrap/dist/js/bootstrap.min';
import Siema from 'siema';

$(() => {
  createSlider('.mainSlider');
  createSlider('.projectSlider', {perPage: 3});
})

function createSlider(selector, options = {}) {
  const config = Object.assign({}, {
    selector,
    loop: true
  }, options);
  const slider = new Siema(config);


  document.querySelector(`${selector}`).parentElement
    .querySelector('.slider__control--backward')
    .addEventListener('click', (e) => slider.prev());
  document.querySelector(`${selector}`).parentElement
    .querySelector('.slider__control--forward')
    .addEventListener('click', (e) => slider.next());
}
