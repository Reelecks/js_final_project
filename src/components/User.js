import createElement from "../utils/createElement";
const User = ({
  text = "Inconnu",
  src,
  tagName = "div",
  gender = "Inconnu",
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
          class: "cardOne",
        },
        children: [
          {
            tagName: "div",
            attributes: {
              class:
                "body d-md-flex align-items-center justify-content-between",
            },
            children: [
              {
                tagName: "div",
                attributes: {
                  class: "box-1",
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
                  class: "box-2 d-flex flex-column h-100",
                },
                children: [
                  {
                    tagName: "div",
                    attributes: {
                      class: "mt-5",
                    },
                    children: [
                      {
                        tagName: "p",
                        text: text,
                        attributes: {
                          class: "mb-1 h-1",
                        },
                      },
                      {
                        tagName: "p",
                        text: `gender: ${gender}`,
                        attributes: {
                          class: "text-muted mb-2",
                        },
                      },
                      {
                        tagName: "p",
                        text: `species: ${species}`,
                        attributes: {
                          class: "text-muted mb-2",
                        },
                      },
                      {
                        tagName: "p",
                        text: `origins: ${origin}`,
                        attributes: {
                          class: "text-muted mb-2",
                        },
                      },
                      {
                        tagName: "p",
                        text: `last location: ${location}`,
                        attributes: {
                          class: "text-muted mb-2",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

export default User;
