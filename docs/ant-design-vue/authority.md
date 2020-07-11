# 权限管理
权限管理分为两个部分：`页面权限` `按钮权限`。

详细的权限文档说明，建议查看 [文档](https://pro.loacg.com/docs/authority-management)

### 页面权限
页面查看权限可以在后端左侧菜单栏`菜单管理`中，配置 `查看权限` 此项。

如果页面不需要权限查看或页面下的按钮不需要权限判断，留空即可。

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

### 按钮权限
根据用户所在角色已分配的权限下，判断一个按钮是否有权限显示。

按钮判断需要在菜单配置对应的查看权限

添加按钮：后端`菜单管理`下为页面添加操作按钮，填写对应的 `权限标识`，填写对应的相应权限。

#### 例子1

菜单 User
* 权限标识为 `User`
* 查看权限为 `User `

User 页面按钮
* `创建用户` 权限标识 `CreateUser`
* `更新用户` 权限标识 `UpdateUser`
```vue
<template>
    <div class="row">
        <a-button v-action:CreateUser>创建用户</a-button>
        <a-button v-action:UpdateUser>更新用户</a-button>
    </div>
</template>
```

#### 例子2
一个页面需要判断多个菜单的按钮权限(跨菜单判断按钮)，可以在当前页面菜单的【Permission】下追加。

菜单 User
* 权限标识 = `User`
* Permission = `User` `Order`

Permission 可以理解成，当前页面的按钮是否存在`User, Order`菜单下。

页面使用 `v-action` 命令判断

```vue
# Test.vue

<template>
    <a-button v-action:CreateUser>添加用户</a-button>
    <a-button v-action:CreateOrder>添加订单</a-button>
</template>
```