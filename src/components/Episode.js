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
          class: "list-group-item-episode",
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
                text: text,
              },
              {
                tagName: "p",
                text: `Date: ${date}`,
              },
              {
                tagName: "p",
                text: `Episode: ${episode}`,
              }
            ],
          },
        ],
      },
    ],
  });

export default Episode;
