# 权限管理
权限管理分为两个部分：`页面权限` `按钮权限`。

详细的权限文档说明，建议查看 [文档](https://pro.loacg.com/docs/authority-management)

## 页面权限
页面查看权限可以在后端左侧菜单栏`菜单管理`中，配置 `查看权限` 此项。

如果页面不需要权限查看，留空即可。

后端生成的路由格式, 如菜单已配置查看权限，后端会自动生成对应的`permission`
```js
{
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/workplace',
    component: RouteView,
    meta: { title: '仪表盘', keepAlive: true, icon: 'dashboard' },
    children: [
        {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: '分析页', keepAlive: false, permission: ['analysis'] }
        },
        {
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: '工作台', keepAlive: true, permission: ['workspace'] }
        }
    ]
}
```

## 按钮权限
根据用户所在角色已分配的权限下，判断一个按钮是否有权限显示。

添加按钮：后端`菜单管理`下为页面添加操作按钮，并且填写好对应的 `权限标识`。

页面使用 `v-action` 命令判断

```vue
<template>
    <a-button v-action:TestAdd>添加</a-button>
</template>
```