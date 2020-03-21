# 部署

### 配置
配置生产环境下的api
```
# .env.production

VUE_APP_API_BASE_URL=xxx

VUE_APP_API_BASE_HOST=xxx
```

### 打包
打包后的静态文件位于 `dist` 文件夹下

```bash
npm run build
# OR
yarn build
```

### Nginx
页面刷新404的情况，请按照下方配置 `try_files`
```
# vhost.conf

server {
    listen       80;
    server_name  localhost;
    root   /var/www/html/dist;
    index  index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html last;
    }
}
```

### 优化
#### 按需加载
页面如需异步加载（不打包到chunk.js）单独一个文件。

使用配置 `/* webpackChunkName: "Test" */`

```js
# src/config/componentConfigs.js

import { BasicLayout, UserLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const Components = {
  // 基础页面 layout 必须引入
  'Layout': {
    BasicLayout,
    UserLayout,
    RouteView,
    BlankLayout,
    PageView
  },
  // 普通页面
  'Page': {
    'Analysis': () => import('@/views/dashboard/Analysis'),

    // 异步加载
    'Test': () => import(/* webpackChunkName: "Test" */ '@/views/test/Index'),

    // ... 在此位置添加你创建的页面文件
  }
}
```
