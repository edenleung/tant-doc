# 快速上手
快速安装项目，进行开发。

### 前端
可选 拉取最新源码或下载[稳定版本](https://github.com/edenleung/think-ant-vue/releases/latest)，安装前端项目
```bash
# 最新源码 
git clone https://github.com/edenleung/think-ant-vue.git

# 为了防止一些网络问题 配置下源

yarn config set registry http://registry.npm.taobao.org/

yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

# 安装依赖
cd think-ant-vue && yarn
```

配置接口
```bash
# .env.development

# 后端域名
VUE_APP_API_BASE_HOST=http://think.com

```

启动项目
```bash
npm run serve
# OR
yarn run serve
```

### 后端
根据情况选取适合自己版本，安装后端项目
```bash
# 最新源码
git clone https://github.com/edenleung/think-admin.git

# 稳定版
composer create-project xiaodi/tant

# 安装依赖
cd think-admin && composer install

# 执行安装
php think tant:install
```
#### 运行项目

* 内置WEB服务器(推荐)

创建一个本地web服务，端口为9501；配置到前端下的 `VUE_APP_API_BASE_HOST` 即可
```
cd public && php -S localhost:9501
```

* Nginx

虚拟主机配置 Rewrite
```
# vhost.conf

server {
    # ...其它配置

    if (!-e $request_filename) {
        rewrite ^(.*)$ /index.php?s=$1 last;
    }
}
```

* Docker

创建PHP容器服务，端口 `9501`

```
cd docker && docker-compose up
```
