import { Tailwind, Colors } from "./colors.js";

Object.keys(Tailwind).forEach(key => {
  const color = Tailwind[key]

  const cardElement = document.createElement('card-color')
  if (color) {
    const name = key.substring(0, 1).toUpperCase() + key.substring(1, key.length).replace('_', ' ')

    cardElement.setAttribute('color', color)
    cardElement.setAttribute('tooltip', `${name}\\n${color}`)
  }

  document.querySelector('#tailwind').appendChild(cardElement)
})

Object.keys(Colors).forEach(key => {
  const color = Colors[key]?.toUpperCase()

  const cardElement = document.createElement('card-color')
  if (color) {
    const name = key.substring(0, 1).toUpperCase() + key.substring(1, key.length).replace('_', ' ')

    cardElement.setAttribute('color', color.toUpperCase())
    cardElement.setAttribute('tooltip', `${name}\\n${color}`)
  }

  document.querySelector('#others').appendChild(cardElement)
})