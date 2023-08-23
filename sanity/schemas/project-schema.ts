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
          description:
            "A brief description of the image for accessibility purposes.",
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
          description:
            "A brief description of the image for accessibility purposes.",
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
          description:
            "A brief description of the image for accessibility purposes.",
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
            value: "React",
          },

          {
            title: "Next.js",
            value: "Next.js",
          },

          {
            title: "Typescript",
            value: "TypeScript",
          },

          {
            title: "Tailwind CSS",
            value: "Tailwind CSS",
          },

          {
            title: "Prisma",
            value: "Prisma",
          },

          {
            title: "MongoDB",
            value: "MongoDB",
          },

          {
            title: "Planetscale",
            value: "Planetscale",
          },

          {
            title: "SCSS",
            value: "SCSS",
          },

          {
            title: "Supabase",
            value: "Supabase",
          },

          {
            title: "Stripe",
            value: "Stripe",
          },

          {
            title: "WordPress",
            value: "WordPress",
          },

          {
            title: "PHP",
            value: "PHP",
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
      name: "repositoryLink",
      title: "Repository link",
      type: "url",
    },

    {
      name: "demoLink",
      title: "Demo Link",
      type: "url",
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

    {
      name: "mockupImageOne",
      title: "Mockup Image #1",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },

    {
      name: "mockupImageTwo",
      title: "Mockup Image #2",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },

    {
      name: "headingWithTextOne",
      title: "Heading With Text #1",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      name: "mockupImageThree",
      title: "Mockup Image #3",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },

    {
      name: "mockupImageFour",
      title: "Mockup Image #4",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },

    {
      name: "headingWithTextTwo",
      title: "Heading With Text #2",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      name: "mockupImageFive",
      title: "Mockup Image #5",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },

    {
      name: "mockupImageSix",
      title: "Mockup Image #6",
      type: "image",

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "A brief description of the image for accessibility purposes.",
        },
      ],
    },
  ],
};

export default project;
