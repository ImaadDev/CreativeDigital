// sanity/schematypes/service.js

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "titleAr",
      title: "Title (Arabic)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      title: "Description (English)",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      name: "descriptionAr",
      title: "Description (Arabic)",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // allows selecting focal point
      },
    },
  ],
};
