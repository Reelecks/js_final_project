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
                text: `nom: ${text}`,
              },
              {
                tagName: "p",
                text: `species: ${species}`,
              },
              {
                tagName: "p",
                text: `origins: ${origin}`,
              },
              {
                tagName: "p",
                text: `last location: ${location}`,
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
