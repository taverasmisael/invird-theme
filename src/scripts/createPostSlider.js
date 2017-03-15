import Siema from 'siema';

export default function createPostSlider(globalSelector) {
  const slidersArray = Array.from(document.querySelectorAll(globalSelector));
  if (slidersArray) {
    slidersArray.forEach(el => {
      const selector = `#${el.id}`;
      const config = {
        selector,
        duration: 500,
        easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        loop: true,
        perPage: 3
      }
      const slider = new Siema(config);

      el.parentElement
        .querySelector('.slider__control--backward')
        .addEventListener('click', (e) => slider.prev());
      el.parentElement
        .querySelector('.slider__control--forward')
        .addEventListener('click', (e) => slider.next());
    })
  } else {
    return;
  }
}
