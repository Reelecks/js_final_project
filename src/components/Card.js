import createElement from "../utils/createElement";

const Card = ({
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
                text: `espèce: ${species}`,
              },
              {
                tagName: "p",
                text: `origines: ${origin}`,
              },
              {
                tagName: "p",
                text: `dernière location connue: ${location}`,
              },
            ],
          },
        ],
      },
    ],
  });

export default Card;
