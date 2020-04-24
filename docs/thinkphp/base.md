# 基类介绍
系统默认有四个基类，建议开发时继承对应基类。

## 控制器
`app\BaseController.php`
使用控制器时可以在 `__construct()` 注入对应的服务类

```php
use app\BaseController;

class Test extends BaseController
{   
    /**
    * 注入服务
    */
    public function __construct(TestService $service)
    {
        parent::__construct()
        $this->service = $service;
    }

    public function test()
    {
        // 获取前端所有数据
        $data = $this->request->param();
    }
}
```

基类有以下方法
* `validate()` 数据验证
* `sendSuccess()` 返回成功信息
* `sendError()` 返回失败信息

## 请求类
`app\BaseRequest.php`
继承此基类可使用数据验证。

定义请求类
```php
<?php

use app\BaseRequest;

class TestRequest
{
    // 验证规则
    protected $rule = [];

    // 错误信息
    protected $message = [];

    // 验证场景
    protected $scene = [];
}
```
基类有以下方法
* `scene()` 指定场景验证
* `batch()` 批量验证
* `validate()` 进行验证数据
* `renew()` 更新一条记录
* `remove()` 删除一条记录
* `getError()` 获取失败信息

## 服务类
`app\BaseService.php`
使用服务类时可以在 `__construct()` 注入对应的模型类

```php
use app\BaseService;

class TestService extends BaseService
{
    public function __construct(Test $model)
    {
        parent::__construct()
        $this->model = $model;
    }
}
```

基类有以下方法
* `all()` 获取所有数据
* `paginate()` 获取分页
* `add()` 添加一条记录
* `renew()` 更新一条记录
* `remove()` 删除一条记录
* `getError()` 获取失败信息
* `transaction($func)` 事务操作（自动回滚）

事务操作 例子
```php
public function update($id, array $data)
{
    return $this->transaction(function() use ($id, $data){
         $article = Article::find($id);
         $article->save($data);
         return true;
    });
}
```

## 模型类
`app\BaseModel`

```php
use app\BaseModel;

class Test extends BaseModel
{
}
```

一般 CURD（没有复杂的逻辑）可直接调用 `add` `renew` `remove` 实现简单的`增加` `修改` `删除`

如果有复杂的逻辑，可以在当前模型类下重写 `add` `renew` `remove` 方法,  或者不调用以上方法。

基类有以下方法
* `all()` 获取所有数据
* `paginate()` 获取分页
* `add()` 添加一条记录
* `renew()` 更新一条记录
* `remove()` 删除一条记录
* `scopeDataAccess()` 数据权限 (数据范围)
