import Location from "./Location";

export default function ListLocation(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)
  arrayOfElement.forEach(e => {
    element.querySelector('div').appendChild(Location(e))
  });
  element.querySelector('.start').classList.remove('start');
  element.getElementById('start').classList.add('start-boxLocation')
  return element
}