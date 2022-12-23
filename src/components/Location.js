import createElement from "../utils/createElement";

const Location = ({
  text = "Inconnu",
  type = "Inconnu",
  dimension = "Inconnu",
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
          class: "list-group-item-location",
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
                text: `Type: ${type}`,
              },
              {
                tagName: "p",
                text: `Dimension: ${dimension}`,
              },
            ],
          },
        ],
      },
    ],
  });

  export default Location;