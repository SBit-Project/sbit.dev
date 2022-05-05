module.exports = {
    title: 'SBIT',
    tagline: 'Smart Bitcoin Blockchain',
    url: 'https://sbit-project.github.io/',
    baseUrl: '/sbit.dev/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'SBit-Project',
    projectName: 'sbit.dev',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    plugins: [
        'docusaurus-tailwindcss-loader',
        'docusaurus-plugin-sass',
        [
            'docusaurus-plugin-typedoc',
            {
                tsconfig: './tsconfig.json',
                watch: process.env.TYPEDOC_WATCH,
            }
        ]
    ],
    themeConfig: {
        image: 'img/sbit_logo.svg',
        additionalLanguages: ['sol', 'ini', 'conf'],
        announcementBar: {
            id: 'warn',
            content:
                'Smart Bitcoin is still under active development, be aware that breaking changes may occur.',
            backgroundColor: '#FF5B79',
            textColor: 'black',
            isCloseable: true,
        },
        colorMode:{
            defaultMode: 'dark',
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Smart Bitcoin',
            logo: {
                alt: 'Sbit Logo',
                src: 'img/sbit_logo.svg'
            },
            items: [
                {
                    type: 'doc',
                    docId: 'welcome',
                    position: 'left',
                    label: 'Docs',
                },
                {to: '/blog/nft', label: 'Blog', position: 'left'},
            // Community
            {
                type: 'dropdown',
                label: 'Community',
                position: 'left',
                items: [
                {
                    label: 'Github',
                    href: 'https://github.com/SBit-Project',
                },
                {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/sbitproject/',
                },
                ],
            },

            // Support
            {
                type: 'dropdown',
                label: 'Support',
                position: 'left',
                items: [
                {
                    type: 'doc',
                    label: 'Contributing',
                    docId: 'Help/contributing',
                },
                {
                    type: 'doc',
                    label: 'Code of Conduct',
                    docId: 'Help/CODE_OF_CONDUCT',
                },
                ],
            },
                {
                    href: 'https://github.com/SBit-Project',
                    className: 'mr-2 header-github-link',
                    'aria-label': 'GitHub repository',
                    position: 'right'
                }
            ]
        },
        footer: {
            links: [
                {
                    title: 'Get in touch',
                    items: [
                        {
                            label: 'Contact',
                            href: 'mailto: dev@sbit.dev'
                        }
                    ]
                },

                {
                    title: 'Docs',
                    items: [
                      {
                        label: 'Tutorial',
                        to: '/docs/welcome',
                      },
                    ],
                  },
                  {
                    title: 'Community',
                    items: [
                      {
                        label: 'Instagram',
                        href: 'https://www.instagram.com/sbitproject/',
                      },
                    ],
                  },
                  {
                    title: 'More',
                    items: [
                      {
                        label: 'Blog',
                        to: '/blog',
                      },
                      {
                        label: 'GitHub',
                        href: 'https://github.com/SBit-Project/',
                      },
                    ],
                  },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} - Sbit Project`
        },
        prism: {
            theme: require('prism-react-renderer/themes/vsDark')
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ]
                },
            }
        ]
    ]
}
