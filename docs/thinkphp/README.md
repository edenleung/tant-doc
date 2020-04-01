# 介绍
本后台使用的后端框架是基于项目 `ThinkPHP 6.0` 进行开发

## 开发规范

开发项目时建议参考以下例子

控制器调用服务类，服务类调用模型。

模型文件不参与业务代码，只做关联，定义操作。

### 获取数据
 `controller` -> `service` -> `model`

```php
# Test.php

use think\exception\ValidateException;
use app\BaseController;

class Test extends BaseController
{
    /**
    * 注入服务类
    */
    public function __construct(TestService $service)
    {
        $this->service = $service;
    }

    /**
    * 获取列表
    */
    public function list()
    {
        $data = $this->service->getList();

        return $this->sendSuccess($data);
    }
}
```

### 验证数据
建议通过请求类验证数据。

定义请求类
```php
# TestRequest.php
<?php

use app\BaseRequest;

class TestRequest extends BaseRequest
{
    // 验证规则
    protected $rule = [];

    // 错误信息
    protected $message = [];

    // 验证场景
    protected $scene = [];
}
```

定义控制器
```php
# Test.php

use app\BaseController;

class Test extends BaseController
{
    /**
    * 注入服务类
    */
    public function __construct(TestService $service)
    {
        $this->service = $service;
    }

    /**
    * 添加记录
    */
    public function add(TestRequest $request)
    {
        // 数据验证
        if (!$this->validate()) {
            // 当验证失败时
            return $this->sendError($request->getError());
        }

        if ($this->service->add($request->param()) === false) {
            return $this->sendError();
        }

        return $this->sendSuccess();
    }
}
```
