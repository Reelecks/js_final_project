import createElement from "../utils/createElement";

const Episode = ({
  text = "Inconnu",
  date = "xx/xx/xxxx",
  episode = "Inconnue",
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
              class: "card__body",
            },
            children: [
              {
                tagName: "h4",
                text: `nom: ${text}`,
              },
              {
                tagName: "p",
                text: `date de sorties: ${date}`,
              },
              {
                tagName: "p",
                text: `épisode: ${episode}`,
              }
            ],
          },
        ],
      },
    ],
  });

export default Episode;
