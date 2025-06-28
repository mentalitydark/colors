import { Colors } from "./colors.js";

Object.keys(Colors).forEach(key => {
  const color = Colors[key]

  const cardElement = document.createElement('card-color')
  cardElement.setAttribute('color', color)

  document.querySelector('main').appendChild(cardElement)
})