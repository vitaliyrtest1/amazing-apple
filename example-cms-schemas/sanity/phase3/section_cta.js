export default {
  name: "section_cta",
  title: "Call to Action",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      required: true,
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      required: true,
    },
    {
      title: "Actions",
      name: "actions",
      type: "array",
      of: [{ type: "action" }],
    },
  ],
};