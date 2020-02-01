# 后端
本后台使用的后端框架是基于项目 `ThinkPHP 6.0` 进行开发

## 目录结构
```
.
├── app
│   ├── AbstractController.php
│   ├── AbstractModel.php
│   ├── BaseController.php
│   ├── ExceptionHandle.php
│   ├── Request.php
│   ├── admin
│   ├── common.php
│   ├── event
│   ├── event.php
│   ├── home
│   ├── listener
│   ├── middleware.php
│   ├── model
│   ├── provider.php
│   ├── service
│   ├── subscribe
│   └── traits
├── composer.json
├── database
│   └── migrations
├── phpstan.neon
├── public
│   ├── favicon.ico
│   ├── index.php
│   ├── robots.txt
│   ├── router.php
│   ├── static
│   └── storage
├── route
│   ├── admin
│   ├── app.php
│   └── home
└── think
```