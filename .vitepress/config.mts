import { withMermaid } from "vitepress-plugin-mermaid";
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "SpaceMC Docs",
  description: "Documentación ténica de las modalidades de SpaceMC Network. Toda la información presente en estos documentos se considera desclasificada y por lo tanto, pública.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SpaceMCNet/docs' },
      { icon: 'discord', link: 'https://discord.gg/SpaceMC' },
    ]
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
  mermaid: {},
  lastUpdated: true,
  cleanUrls: true,
  vite: { plugins: [pagefindPlugin()] }
})