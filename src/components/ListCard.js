import Card from "./Card";
import showOneUser from "../utils/showOneUser";
export default function ListCard(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)

  arrayOfElement.forEach(e => {
    const card = Card(e)
    card.querySelectorAll('.buttonUser').forEach(element => {
      console.log('clicked')
      element.addEventListener('click', () => {
        console.log('clicked')
        showOneUser(element.id);
      })})
   element.querySelector('div').appendChild(card)

  });

  return element
}