//import { defineUserConfig } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { navbarEn, sidebarEn, navbarRu, sidebarRu } from './configs'

export default defineUserConfig({
  // lang: 'en-US',
  // title: 'Documentation',
  // description: 'Just playing around',
  // base: '/document-vuepress/'
  base: '/',

  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Документация',
      description: 'Обычная документация',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Documentation',
      description: 'Just playing around',
},
  },

  theme: defaultTheme({
    repo: 'MarionetkaX/document-vuepress',
    docsDir: '/docs',

    locales: {
      '/': {
        navbar: navbarRu,
        selectLanguageName: 'RU',
        selectLanguageText: 'Язык',
        selectLanguageAriaLabel: 'Язык',
        sidebar: sidebarRu
      },
      '/en/': {
        navbar: navbarEn,
        selectLanguageName: 'EN',
        sidebar: sidebarEn
      }
    }

  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
})