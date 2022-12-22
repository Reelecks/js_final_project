import Location from "./Location";

export default function ListLocation(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)
  console.log(element.querySelector('.start'))
  arrayOfElement.forEach(e => {
    element.querySelector('div').appendChild(Location(e))
  });
  element.querySelector('.start').classList.remove('start');
  return element
}