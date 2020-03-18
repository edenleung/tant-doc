module.exports = {
  title: 'TAnt',
  description: 'Just For ThinkPHP 6',
  themeConfig: {
    sidebar: {
      '/guide/': [
        '',
      ],
      '/ant-design-vue/': ['', 'structure', 'create', 'authority', 'deploy'],
      '/thinkphp/': ['', 'structure', 'base', 'trait' ,'route', 'data-permission'],
      '/': [
        ''
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: 'Ant Design', link: '/ant-design-vue/'},
      { text: 'ThinkPHP', link: '/thinkphp/' },
      {
        text: 'Github',
        ariaLabel: 'Project Menu',
        items: [
          { text: '前端项目', link: 'https://github.com/edenleung/think-ant-vue' },
          { text: '后端项目', link: 'https://github.com/edenleung/think-admin' }
        ]
      }
    ]
  }
}