import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
    '/guide/': [
        {
            text: 'Гайд',
            children: [
                '/guide/README.md'
            ]
        }
    ],
    '/section1/': [
        {
            text: 'Секция1',
            children: [
                '/section1/sec1.md',
                '/section1/sec2.md'
            ]
        }
    ],
    '/section2/': [
        {
            text: 'Секция2',
            collapsible: true,
            children: [
                '/section2/sec1.md',
                '/section2/sec2.md'
            ]
        }
    ]
}