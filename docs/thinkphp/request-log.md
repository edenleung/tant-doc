# 请求日志

当业务需要监听用户所提交的信息时，可使用以下中间件获取。

具体日志信息会生成在 `runtime` 对应 api 文件下。

## Request 日志

记录创建订单时 ，前端请求的参数。

```php
use TAnt\Middleware\Log\Request;

Route::post('/order', 'order/create')->middleware(Request::class);
```

## Response 日志

记录订单创建后 ，后端返回的参数。

```php
use TAnt\Middleware\Log\Request;

Route::post('/order', 'order/create')->middleware(Response::class);

# 当需要 Request、Response 同时监听时
# Route::post('/order', 'order/create')->middleware(Request::class)->middleware(Response::class);
```
