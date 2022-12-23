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
          class: "list-group-item",
        },
        children: [
          {
            tagName: "div",
            attributes: {
              class: "card__body_Episode",
            },
            children: [
              {
                tagName: "h4",
                text: `name: ${text}`,
              },
              {
                tagName: "p",
                text: `date: ${date}`,
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
