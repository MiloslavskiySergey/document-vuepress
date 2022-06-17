import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarRu: NavbarConfig = [
    {
        text: 'Гайд',
        link: '/guide/'
    },
    {
        text: 'Секции',
        children: [
            {
                text: 'Секция1',
                children: [
                    '/section1/sec1.md',
                    '/section1/sec2.md'
                ]
            },
            {
                text: 'Секция2',
                children: [
                    '/section2/sec1.md',
                    '/section2/sec2.md'
                ]
            }
        ]
    }
]