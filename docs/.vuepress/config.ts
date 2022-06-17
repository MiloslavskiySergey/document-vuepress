//import { defineUserConfig } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
  // lang: 'en-US',
  // title: 'Documentation',
  // description: 'Just playing around',
  // base: '/document-vuepress/'
  base: '/',

  locales: {
    '/': {
            lang: 'en-US',
            title: 'Documentation',
            description: 'Just playing around',
    }
  },

  theme: defaultTheme({
    repo: 'MarionetkaX/document-vuepress',
    docsDir: '/',

    locales: {
      '/': {
        navbar: navbar,
        sidebar: sidebar
      }
    }

  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
})