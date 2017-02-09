import '../scss/main.scss';
import 'bootstrap/dist/js/bootstrap.min';
import Siema from 'siema';

$(() => {
  createSlider('.mainSlider');
  createSlider('.projectSlider', { perPage: 3 });
})

function createSlider(selector, options = {}) {
  const sliderElement = document.querySelector(`${selector}`);
  if (sliderElement) {
    const config = Object.assign({}, {
      selector,
      duration: 500,
      easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      loop: true
    }, options);
    const slider = new Siema(config);

    sliderElement.parentElement
      .querySelector('.slider__control--backward')
      .addEventListener('click', (e) => slider.prev());
   sliderElement.parentElement
      .querySelector('.slider__control--forward')
      .addEventListener('click', (e) => slider.next());
    } else {
      return ;
    }
}
