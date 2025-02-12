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
  onBrokenLinks: "log",
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
          // editUrl: `${ENV_VARIABLE.githubURL}/rowanna.github.io/tree/main/`,
          path: "docs/series",
          routeBasePath: "/series",
          docCategoryGeneratedIndexComponent:
            "@site/src/components/CategoryIndexPage",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          routeBasePath: "/etc",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: `${ENV_VARIABLE.githubURL}/rowanna.github.io/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All my posts",
          blogListComponent: "@theme/BlogListPage",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "docs/dev", // `docs/frontend` 폴더 내 문서 관리
        routeBasePath: "dev", // /frontend 경로로 접근 가능
        sidebarPath: "./devSidebars.ts",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "frontend",
        path: "docs/frontend", // `docs/frontend` 폴더 내 문서 관리
        routeBasePath: "frontend", // /frontend 경로로 접근 가능
        sidebarPath: "./frontendSidebars.ts",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "foundations",
        path: "docs/foundations", // `docs/foundations` 폴더 내 문서 관리
        routeBasePath: "foundations", // /foundations 경로로 접근 가능
        sidebarPath: "./foundationsSidebars.ts",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig: {
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
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
      hideOnScroll: true,
      title: `${ENV_VARIABLE.blogName}`,
      // logo: {
      // alt: "My Site Logo",
      // src: "img/logo.svg",
      // },
      items: [
        {
          to: "/about",
          position: "left",
          label: "About",
        },
        {
          type: "docSidebar",
          sidebarId: "series",
          position: "left",
          label: "Series",
          // to: "/series",
        },

        {
          type: "dropdown",
          label: "Dev",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "devSidebar",
              label: "Dev",
              to: "/dev",
              docsPluginId: "dev",
            },
            {
              type: "docSidebar",
              sidebarId: "frontendSidebar",
              label: "Frontend",
              to: "/frontend",
              docsPluginId: "frontend",
            },
            {
              type: "docSidebar",
              sidebarId: "foundationsSidebar",
              label: "Foundations",
              to: "/foundations",
              docsPluginId: "foundations",
            },
          ],
        },
        {
          to: "/etc",
          position: "left",
          label: "Etc",
        },
        // {
        //   to: "/blog/tags",
        //   position: "left",
        //   label: "Category",
        // },
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
            // {
            //   label: "Portfolio",
            //   to: "/",
            // },
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
