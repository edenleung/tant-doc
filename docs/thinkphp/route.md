# 路由
系统默认是开启多应用，请在 `/route` 文件夹下配置对应应用的路由。

实现路由权限拦截的，必须配置以下中间件。
* Jwt中间件 `xiaodi\Middleware\Jwt`
* 权限验证中间件`app\admin\middleware\Permission`

可根据以下例子，配置 `普通路由`，`带有用户信息路由`，`权限验证路由`

## 普通路由
就一条普通的路由，啥限制都没有。
```php
# /route/admin/app.php

use app\admin\middleware\Permission;
use think\facade\Route;
use xiaodi\Middleware\Jwt;

Route::get('/test/hello', function() {
    return '这是一条普通路由';
});->allowCrossDomain();

```

## 用户路由
一条具有用户（已登录）对象的路由
```php
# /route/admin/app.php

use app\admin\middleware\Permission;
use think\facade\Route;
use xiaodi\Middleware\Jwt;

Route::rule('/test/user', function() {
    // 输出当前已登录用户的昵称
    return 'nickname:' . request()->user->nickname;
}, 'GET')->allowCrossDomain()->middleware(Jwt::class);
```

## 权限路由
一条具有用户（已登录）对象并且有指定权限访问的路由
```php
# /route/admin/app.php

use app\admin\middleware\Permission;
use think\facade\Route;
use xiaodi\Middleware\Jwt;

Route::rule('/test/user/hello', function() {
    // 有 hello 权限的用户才可以访问
    return 'hello, ' . request()->user->nickname;
}, 'GET')
->allowCrossDomain()
->middleware(Jwt::class);
->middleware(Permission::class, 'hello')
```
