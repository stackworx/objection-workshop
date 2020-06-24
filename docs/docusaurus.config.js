module.exports = {
  title: "Objection Workshop",
  tagline: "Introduction course into Objection.js",
  url: "https://stackworx.github.io/",
  baseUrl: "/objection-workshop/",
  favicon: "img/favicon.ico",
  organizationName: "stackworx",
  projectName: "objection-workshop",
  scripts: [
    {
      src: "/objection-workshop/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      title: "Stackworx Objection Workshop",
      logo: {
        alt: "Logo",
        src: "img/knexjs.png",
      },
      links: [
        {
          to: "docs/getting-started",
          activeBasePath: "docs",
          label: "Getting Started",
          position: "left",
        },
        {
          href: "https://github.com/stackworx/objection-workshop",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Assignments",
          items: [
            {
              label: "Kubernetes Tutorials",
              to: "https://kubernetes.io/docs/tutorials/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              to: "https://stackworx.io/",
            },
            {
              label: "GitHub",
              href: "https://github.com/stackworx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} K8s Workshop, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/stackworx/objection-workshop/edit/master/docs/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/stackworx/objection-workshop/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
