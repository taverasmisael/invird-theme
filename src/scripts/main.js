import '../scss/main.scss'
import 'bootstrap/dist/js/bootstrap.min'

import createPostSlider from './createPostSlider'
import handleMinistries, {generateAllLinks} from './minstriesFilter'

$(() => {
  createPostSlider('.postSlider')
  handleMinistries('#mininstries-selector', '.footer__ministries__list')
})
