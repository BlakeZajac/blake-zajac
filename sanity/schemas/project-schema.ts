const project = {
  name: "project",
  title: "Projects",
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
      name: "featuredImage",
      title: "Featured Image",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
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

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "homePageImage",
      title: "Home Page Image",
      type: "image",

      options: {
        hotspot: "true",
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],

      hidden: ({ parent }: { parent: any }) => !parent.displayOnHomePage,
    },

    {
      name: "stack",
      title: "Stack",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],

      options: {
        list: [
          {
            title: "React",
            value: "react",
          },

          {
            title: "Next.js",
            value: "nextjs",
          },

          {
            title: "Typescript",
            value: "typescript",
          },

          {
            title: "Tailwind CSS",
            value: "tailwindcss",
          },

          {
            title: "Planetscale",
            value: "planetscale",
          },

          {
            title: "SCSS",
            value: "scss",
          },

          {
            title: "Supabase",
            value: "supabase",
          },

          {
            title: "Stripe",
            value: "stripe",
          },

          {
            title: "WordPress",
            value: "wordpress",
          },

          {
            title: "PHP",
            value: "php",
          },
        ],
      },
    },

    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
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

export default project;
