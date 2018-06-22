module.exports = {
  title: 'WhiteStar Docs',
  description: 'WhiteStar Systems Documentation Hub',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#242524' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#242524' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous'}]
  ],
  themeConfig: {
    sidebar: {
      '/ms-mon/': genSidebarMMS('Mediasite Recorder Monitor'),
      '/inventory/' : genSidebarInventory(),
      '/vault/': genSidebarVault('Vault')
    },
    nav: [
      {
        text: 'Docs Home',
        link: '/'
      },
      {
        text: 'Products',
        items: [
          {
            text: 'Welcome',
            link: '/welcome/'
          },
          {
            text: 'Mediasite Recorder Monitor',
            link: '/ms-mon/'
          },
          {
            text: 'Inventory',
            link: '/inventory/'
          }
        ],
      },
      {
        text: 'Tools',
        items: [
          {
            text: 'Hub',
            link: '/hub/'
          },
          {
            text: 'Vault',
            link: '/vault/'
          }
        ]
      }
    ],
    lastUpdated: 'Updated',
    repo: 'ws-systems/docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    licenseText: 'Creative Commons (CC BY-SA 4.0) Licensed',
    licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0/'
  }
}

function genSidebarMMS (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'second'
      ]
    }
  ]
}

function genSidebarInventory() {
  return [
    '',
    {
      title: 'Introduction',
      collapsable: false,
      children: [
        'checkout',
        'checkin'
      ]
    },
    {
      title: 'Administrator Tools',
      collapsable: false,
      children: [
        'admin/',
        'admin/items',
        'admin/macros',
        'admin/categories',
        'admin/transactions',
        'admin/users'
      ]
    },
    {
      title: 'System Configuration',
      collapsable: false,
      children: [
        'config/',
        'config/kit',
        'config/erd'
      ]
    }
  ]
}

function genSidebarVault (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'installation',
        'configure-vault',
        'access_control',
        'adding-a-ui',
        'additional_resources'
      ]
    }
  ]
}
