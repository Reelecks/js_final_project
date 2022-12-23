import createElement from "../utils/createElement";
import showOneUser from "../utils/showOneUser";

import { tabManager } from "../../main";

const Card = ({
  id,
  text = "Inconnu",
  src,
  tagName = "div",
  species = "Inconnue",
  origin = "Inconnue",
  location = "Inconnue",
} = {}) =>
  createElement({
    
    tagName: "div",
    attributes: {
      class: "container",
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "card",
        },
        children: [
          {
            tagName: "div",
            attributes: {
              class: "card__header",
            },
            children: [
              {
                tagName: "img",
                attributes: {
                  src: src,
                },
              },
            ],
          },
          {
            tagName: "div",
            attributes: {
              class: "card__body",
            },
            children: [
              {
                tagName: "h4",
                text: text,
              },
              {
                tagName: "p",
                text: `Species: ${species}`,
              },
              {
                tagName: "p",
                text: `Origins: ${origin}`,
              },
              {
                tagName: "p",
                text: `Last location: ${location}`,
              },
              {
                tagName: "button",
                text: 'More',
                attributes: {
                  class: "button buttonUser",
                  id: id,
                },
              },
            ],
          },
        ],
      },
      
    ],
  });

export default Card;
