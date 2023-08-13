const service = {
  name: "service",
  title: "Services",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",

      options: {
        source: "name",
      },
    },

    {
      name: "displayOnHomePage",
      title: "Display on the home page?",
      type: "boolean",
    },

    {
      name: "badges",
      title: "Badges",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],
    },

    {
      name: "content",
      title: "Content",
      type: "array",

      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default service;
