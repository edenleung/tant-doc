# 快速上手
快速安装项目，进行开发。

### 前端
拉取最新源码，安装前端项目
```bash
# 拉取项目
git clone https://github.com/edenleung/think-ant-vue.git

# 安装依赖
cd think-ant-vue && yarn
```

配置接口
```bash
# .env.development

# 后端域名
VUE_APP_API_BASE_HOST=http://think.com
# 后端接口
VUE_APP_API_BASE_URL=http://think.com/admin

```

启动项目
```bash
yarn run serve
```

### 后端
拉取最新源码，安装后端项目
```bash
# 拉取项目
git clone https://github.com/edenleung/think-admin.git

# 安装依赖
cd think-admin && composer install
```

配置数据库
```bash
cp .env.example .env
```

```env
[DATABASE]
TYPE = mysql
HOSTNAME = localhost
DATABASE = think
USERNAME = root
PASSWORD = 1234
HOSTPORT = 3306
CHARSET = utf8
DEBUG = true
```

迁移数据
```bash
php think migrate:run
```