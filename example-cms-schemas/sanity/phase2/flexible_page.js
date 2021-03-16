export default {
  name: "flexible_page",
  title: "Flexible Page",
  type: "document",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Page Title",
      required: true,
    },
    {
      type: "slug",
      name: "slug",
      title: "Page Slug",
      required: true,
      options: { source: "title" },
    },
    {
      type: "string",
      name: "featured_image_url",
      title: "Featured Image URL",
      required: true,
    },
    {
      type: "array",
      of: [{type: "section_cta"}, {type: "section_cards"}],
      name: "sections",
      title: "Sections",
    },
  ],
};