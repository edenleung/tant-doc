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
建议通过控制器验证数据。
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
    * 添加记录
    */
    public function add()
    {
        // 获取前端发送上来的所有数据
        $data = $this->request->param();

        try {
            // 验证数据
            $this->validate($data, [
                'name' => 'require',
            ], [
                'name.require' => '名称必须',
            ]);
        } catch (ValidateException $e) {
            return $this->sendError($e->getError());
        }

        if ($this->service->add($data) === false) {
            return $this->sendError();
        }

        return $this->sendSuccess();
    }
}
```