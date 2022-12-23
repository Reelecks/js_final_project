import User from "./User";
import Card from "./Card";

export default function OneUser(user) {
  const template = document.querySelector("#listOfElement");
  const element = template.content.cloneNode(true);
  element.querySelector("div").appendChild(User(user));
  element.querySelector('.start').classList.remove('start');
  element.querySelector('#start').classList.add('startOne');
  return element;
}
