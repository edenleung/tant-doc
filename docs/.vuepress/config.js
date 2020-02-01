module.exports = {
  title: 'TAnt',
  description: 'Just For ThinkPHP 6',
  themeConfig: {
    sidebar: {
      '/guide/': [
        '', 'getting-started', 'ant-deisgn-vue', 'thinkphp'
      ],
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: 'Github',
        ariaLabel: 'Project Menu',
        items: [
          { text: '前端', link: 'https://github.com/edenleung/think-ant-vue' },
          { text: '后端', link: 'https://github.com/edenleung/think-admin' }
        ]
      }
    ]
  }
}