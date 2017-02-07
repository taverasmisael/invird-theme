import '../scss/main.scss';
import 'bootstrap/dist/js/bootstrap.min';
import Siema from 'siema';

activateMainSlider();

function activateMainSlider() {
  const mainSlider = new Siema({
    selector: '.slider__container',
    loop: true,

  });

  document.querySelector('.slider__control--backward')
    .addEventListener('click', (e) => mainSlider.prev());
  document.querySelector('.slider__control--forward')
    .addEventListener('click', (e) => mainSlider.next());
}
