# 新增页面
目前创建一个页面需要执行三步，`创建页面` `配置页面` `配置菜单`。

## 创建页面

在 `src/views` 下新建页面的vue文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

例如创建 HelloWorld.vue
`src/views/HelloWorld.vue`

## 配置页面
将新增的页面添加到组件 `componentConfigs.js` 下普通页面中。 
```bash
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

    // ... 在此位置添加你创建的页面文件
    'HelloWord': () => import('@/views/HelloWorld')
  }
}

```

## 配置菜单
可以把菜单配置理解成 `VueRouter` 里的路由配置。

`组件地址` 选取 [配置页面](#配置页面) `HelloWorld`组件 

* 菜单类型: `菜单`
* 上级类目: `首页`
* 菜单标题： `HelloWorld`
* 组件选择： `HelloWorld`
* 路由地址： `/helloworld`
