export class Card extends HTMLElement {

  connectedCallback() {
    const color = this.getAttribute('color')
    const tooltipText = this.getAttribute('tooltip')

    if (color) {
      this.style.backgroundColor = color
    } else {
      this.setAttribute('empty', '')
      return
    }

    this.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(color.match(/#[a-z0-9]{6}/i) ? color.toUpperCase() : color)
        const tooltip = this.querySelector('.tooltip')
        if (tooltip) {
          tooltip.textContent = 'Copied'
        }
      } catch (e) {
        tooltip.textContent = 'Error'
      }
    })

    this.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div')
      tooltip.innerHTML = tooltipText.replace('\\n', '<br/>')
      tooltip.style.position = 'absolute'
      tooltip.style.bottom = this.getBoundingClientRect().top < 50 ? '-50%' : '110%'
      tooltip.style.left = '50%'
      tooltip.style.padding = '4px 8px'
      tooltip.style.background = '#333'
      tooltip.style.color = '#fff'
      tooltip.style.fontSize = '18px'
      tooltip.style.borderRadius = '4px'
      tooltip.style.whiteSpace = 'nowrap'
      tooltip.style.pointerEvents = 'none'
      tooltip.style.zIndex = '1000'
      tooltip.style.transform = 'translate(-50%)'
      tooltip.style.textAlign = 'center'

      tooltip.classList.add('tooltip')

      this.appendChild(tooltip)
    })

    this.addEventListener('mouseleave', () => {
      const tooltip = this.querySelector('.tooltip')
      if (tooltip) {
        tooltip.remove()
      }
    })

  }

}