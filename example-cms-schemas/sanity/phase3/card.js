export default {
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    {
      title: "Image URL",
      name: "image",
      type: "string",
      required: true,
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      required: true,
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "string",
      required: true,
    },
  ],
};