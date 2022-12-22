import createElement from "../utils/createElement";

const Location = ({
  text = "Inconnu",
  type = "Inconnu",
  dimension = "Inconnu",
} = {}) =>
  createElement({
    tagName: "ul",
    attributes: {
      class: "list-group classOfLocation",
    },
    children: [
      {
        tagName: "li",
        attributes:{
            class: "list-group-item"
        },
        children: [
            {
                tagName: "h4",
                text: text,
              },
              {
                tagName: "p",
                text: `type: ${type}`,
              },
              {
                tagName: "p",
                text: `dimension: ${dimension}`,
              },
        ],
      },
    ],
  });

export default Location;
