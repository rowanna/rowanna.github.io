import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const ENV_VARIABLE = {
  blogName: "rowanna.",
  blogURL: "https://rowanna.github.io",
  userName: "rowanna",
  githubURL: "https://github.com/rowanna",
};

const config: Config = {
  title: `${ENV_VARIABLE.blogName}`,
  // tagline: "",
  favicon: "img/my-notion-face-portrait.png",

  // Set the production url of your site here
  url: `${ENV_VARIABLE.blogURL}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `${ENV_VARIABLE}`, // Usually your GitHub org/user name.
  projectName: "rowanna.github.io", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${ENV_VARIABLE.githubURL}/rowanna.github.io/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${ENV_VARIABLE.githubURL}/rowanna.github.io/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      versionPersistence: "localStorage",
    },
    colorMode: {
      defaultMode: "light",
    },
    metadata: [
      {
        name: "keywords",
        content:
          "rowanna, frontend developer, wonjina, nawonji, 나원지, 프론트엔드개발, 깃허브블로그, rowannablog",
      },
    ],
    // Replace with your project's social card
    image: "img/IMG_8280.JPG",
    navbar: {
      title: `${ENV_VARIABLE.blogName}`,
      // logo: {
      // alt: "My Site Logo",
      // src: "img/logo.svg",
      // },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "right",
        //   label: "Docs",
        // },
        {
          to: "/about",
          position: "left",
          label: "About",
        },
        {
          type: "dropdown",
          label: "Blog",
          position: "left",
          items: [
            {
              label: "Posts",
              href: "/blog",
            },
            {
              label: "Tags",
              href: "/blog/tags",
            },
          ],
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: ENV_VARIABLE.githubURL,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Sites",
          items: [
            // {
            //   label: "Docs",
            //   to: "/docs/intro",
            // },
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Portfolio",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: ENV_VARIABLE.githubURL,
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/wonji-na-a9a345275/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${
        ENV_VARIABLE.userName
      }, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};
export default config;
