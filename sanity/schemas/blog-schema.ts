const blog = {
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",

      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],

      options: {
        list: [
          {
            title: "News",
            value: "news",
          },

          {
            title: "Guides",
            value: "guide",
          },
        ],
      },
    },

    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",

      options: {
        hotspot: true,
      },
    },

    {
      name: "hoverImage",
      title: "Hover Image",
      type: "image",
      description:
        "Upload an image here which will be shown when a user hovers on the article.",

      options: {
        hotspot: true,
      },
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

export default blog;
