import links, { Link } from './ministeries'

/**
 *
 * @param {String} input
 * @param {String} renderer
 */
export default function handleMinistries(input, renderer) {
  const select = document.querySelector(input)
  const wrapper = document.querySelector(renderer)

  const renderElements = (container) => (elements) => container.innerHTML = elements

  const renderInWrapper = renderElements(wrapper)
  select.addEventListener('change', handleSelectionChange)

  renderInWrapper(createLinkElements(links[select.value]))

  /**
   * It will look in the links[] passing the value as argument
   * then will create linkElements and render 'em in the wrapper
   * @param {Event} event
   */
  function handleSelectionChange(event) {
    const elements = event.target.value !== 'ALL' && createLinkElements(links[event.target.value]) || generateAllLinks()
    renderInWrapper(elements)
  }
}


export function generateAllLinks() {
  let allLinks = []
  for (let key in links) {
    allLinks = [
      ...allLinks,
      links[key]
    ]
  }
  allLinks = allLinks.reduce((prev, curr) => [...prev, ...curr], [])
  return createLinkElements(allLinks)
}

/**
 * It make html componets for each Link item passed
 * @param {Link[]} links
 */
function createLinkElements(links) {
  const length = links.length;
  const linksSize = length >= 12 ? 3 : length >= 6 ? 4 : length >= 2 ? 6 : 12
  return links.map(link => `
    <p class="col-12 col-sm-${linksSize} ministery">
      <span class="ministery__name">${link.name}</span>
      <a href="${link.link}" class="ministery-link">${link.link}</a>
    </p>
  `).join('')
}
