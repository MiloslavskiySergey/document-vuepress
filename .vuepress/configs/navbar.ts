import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    {
        text: 'Guide',
        link: '/guide/'
    },
    {
        text: 'Section',
        children: [
            {
                text: 'section1',
                children: [
                    '/section1/sec1.md',
                    '/section1/sec2.md'
                ]
            },
            {
                text: 'section2',
                children: [
                    '/section2/sec1.md',
                    '/section2/sec2.md'
                ]
            }
        ]
    }
]