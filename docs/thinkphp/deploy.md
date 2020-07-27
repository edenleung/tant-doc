# 部署

### Docker

[Dockerfile](https://github.com/edenleung/think-admin/blob/6.0/docker/Dockerfile)

1. 构建镜像
```
cd think

docker build -t yourname/image-name:latest -f docker/Dockerfile .
# Example
// docker build -t xiaodi93/ant-design-admin:latest -f docker/Dockerfile .
```

2. 推送镜像

```
docker login

docker push yourname/image-name:latest

# Example
// docker push xiaodi93/ant-design-admin:latest
```

3. 运行镜像

4. Nginx 容器反向代理
```
server {
  listen 80;
  server_name ant-admin.wfunc.com;

  location / {
    proxy_pass http://ant-design-admin:8000;
  }
}

```