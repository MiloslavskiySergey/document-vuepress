import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/README.md'
            ]
        }
    ],
    '/section1/': [
        {
            text: 'Section1',
            children: [
                '/section1/sec1.md',
                '/section1/sec2.md'
            ]
        }
    ],
    '/section2/': [
        {
            text: 'Section2',
            collapsible: true,
            children: [
                '/section2/sec1.md',
                '/section2/sec2.md'
            ]
        }
    ]
}