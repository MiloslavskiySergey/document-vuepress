import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        link: '/en/guide/'
    },
    {
        text: 'Section',
        children: [
            {
                text: 'section1',
                children: [
                    '/en/section1/sec1.md',
                    '/en/section1/sec2.md'
                ]
            },
            {
                text: 'section2',
                children: [
                    '/en/section2/sec1.md',
                    '/en/section2/sec2.md'
                ]
            }
        ]
    }
]