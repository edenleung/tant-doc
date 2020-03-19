# 对接接口
前端如何与后端接口交互

### 配置
* url 请求地址
* method 请求类型
* params 自定义参数
```js
# src/api/order.js

import { axios } from '@/utils/request'

// 实现一个获取订单列表的接口 （GET）
export function fetchOrder (params) {
  return axios({
    url: '/order',
    method: 'get',
    params
  })
}

// 实现一个创建订单的接口 （POST）
export function createOrder (data) {
  return axios({
    url: '/order',
    method: 'post',
    data
  })
}

// 实现一个更新订单的接口 （PUT）
export function updateOrder (id, data) {
  return axios({
    url: '/order',
    method: 'put',
    data
  })
}

// 实现一个删除订单的接口 （DELETE）
export function deleteOrder (id) {
  return axios({
    url: '/order/' + id,
    method: 'delete'
  })
}
```

### 调用

```vue
# src/views/Order/Index.vue

<template>
    <div>
        <p>订单数据:</p>
        <div>{{ this.data }}</div>
    </div>
</template>

<script>
import { fetchOrder } from '@/api/order'

// 导入多个接口
// import { createOrder, updateOrder, deleteOrder } from '@/api/order'

export default {
  data () {
    return {
      data: []
    }
  },

  mounted () {
    // 当页面挂载完成后 拉取列表数据
    fetchOrder().then(response => {
      // 打印接口返回数据
      console.log(res.result)

      this.data = res.result.data
    })

    // 创建订单
    // const orderData = { name: '订单一', price: 100 }
    // createOrder(orderData).then(response => {
    //   // 打印接口返回数据
    //   console.log(res.result)
    // })

    // 更新订单
    // const orderId = 1
    // const orderData = { name: '订单一', price: 200 }
    // updateOrder(orderId, orderData).then(response => {
    //   // 打印接口返回数据
    //   console.log(res.result)
    // })

    // 删除订单
    // const orderId = 1
    // deleteOrder(orderId).then(response => {
    //   // 打印接口返回数据
    //   console.log(res.result)
    // })
  }
}
</script>
```