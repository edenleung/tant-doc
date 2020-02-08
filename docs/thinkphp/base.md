# 基类介绍
系统默认有三个基类，建议开发时继承对应基类。

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

## 服务类
`app\BaseService.php`
使用服务类时可以在 `__construct()` 注入对应的模型类

```php
use app\BaseService;

class Test extends BaseService
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
* `getError()` 获取验证数据失败信息

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