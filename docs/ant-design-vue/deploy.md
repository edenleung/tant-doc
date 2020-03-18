# 部署

### 配置
配置生产环境下的api
```
# .env.production

VUE_APP_API_BASE_URL=xxx
VUE_APP_API_BASE_HOST=xxx
```

### 打包
打包后的静态文件位于 `dist` 文件夹下

```bash
yarn build
```

### Nginx
页面刷新404的情况，请按照下方配置 `try_files`
```
# vhost.conf

server {
    listen       80;
    server_name  localhost;
    root   /var/www/html/dist;
    index  index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html last;
    }
}
```