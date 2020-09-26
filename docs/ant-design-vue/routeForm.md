# 路由表单

通过路由跳转打开一个表单页面（非当前页打开Modal方式）

具体实现：点击列表页下的按钮跳转到一个页面 添加表单内容

### 菜单配置
主要还是在菜单配置那块，看明白这块就好。

例如有以下三个菜单：表单管理、表单列表、创建表单

名称 | 类型 | 组件地址 | 路由地址 | Redirect | 隐藏 | 
:-: | :-: | :-: | :-: |:-: | :-: | 
表单管理 | 目录 | `PageView`或`RouteView` | `/form` | `/form/list` | `否`
表单列表 | 菜单| 对应的页面组件 | `/form/list` || `否`
创建表单 | 菜单 | 对应的页面组件 | `/form/create` || `是`

**注：**

目录类型的菜单，如果使用自定义的layout(组件地址选择了自定义的layout),

对应 `layout` 文件里的template必须是带有 `<router-view />` , 否者跳转子路由时一直停留原来的页面。

### 如何跳转
```vue
<a-button @click="$router.push('/form/create')">添加表单</a-button>
```

### 参考

* [Commit](https://github.com/edenleung/think-ant-vue/commit/0bd42eeb4b4d289d1dc61d9857128b14feb48992)
* [列表页跳转](https://github.com/edenleung/think-ant-vue/blob/master/src/views/test/Form.vue#L8)
