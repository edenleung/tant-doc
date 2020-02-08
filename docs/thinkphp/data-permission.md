# 数据权限
在实际开发中，需要设置用户只能查看哪些部门的数据，这种情况一般称为数据权限。
例如对于销售，财务的数据，它们是非常敏感的，因此要求对数据权限进行控制， 对于基于集团性的应用系统而言，就更多需要控制好各自公司的数据了。如设置只能看本公司、或者本部门的数据，对于特殊的领导，可能需要跨部门的数据， 因此程序不能硬编码那个领导该访问哪些数据，需要进行后台的权限和数据权限的控制。

目前支持以下几种权限
- 全部数据权限
- 自定数据权限
- 部门数据权限
- 部门及以下数据权限
- 仅本人数据权限

实现数据权限用到以下类文件


- 数据权限类 [DataScope.php](https://github.com/edenleung/think-admin/blob/6.0/app/dataScope/DataScope.php)

- 模型基类下的 `scopeDataAccess` 方法 [BaseModel.php](https://github.com/edenleung/think-admin/blob/6.0/app/BaseModel.php)

## 使用例子
目前只提供手动过滤，如果后期技术能实现的话，可以考虑使用注解方式自动过滤。

Test 模型类
```php
# Test.php 模型类

use app\BaseModel;

class Test extends BaseModel
{
}

```

Test 服务类
```php
# TestService.php

use app\BaseService;

class TestService extends BaseService
{
    /**
    * 注入模型
    */
    public function __construct(Test $model)
    {
        $this->model = $model;
    }

    /**
    * 获取列表
    */
    public function getList()
    {
        // 目标表别名
        $alias = 't';
        $result = $this->model->alias($alias)->scope('dataAccess', $alias)->select();

        // 自定义查询条件(记得条件要加表别名)
        // $map = [];
        // $result = $this->model->alias($alias)->where($map)->scope('dataAccess', $alias)->select();
    }
}


```

参阅官方文档 [查询范围](https://www.kancloud.cn/manual/thinkphp6_0/1037586)