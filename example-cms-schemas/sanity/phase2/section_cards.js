export default {
  name: "section_cards",
  title: "Card Gallery",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      required: true,
    },
    {
      title: "Cards",
      name: "cards",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};