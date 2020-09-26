# 创建表单
创建表单前，你或许要看下[对接接口](api.html)，当然也可以选择不看。
```vue
<template>
  <div>
    <a-card title="发布文章">
      <a-form :form="form">
        <a-form-item label="标题" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="['title', { rules: [{ required: true, message: '请选择文章标题!' }] }]"
            placeholder="填写文章标题"
          />
        </a-form-item>
        <a-form-item label="栏目" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
              'category',
              { rules: [{ required: true, message: '请选择文章栏目!' }] },
            ]"
            placeholder="选择文章栏目"
          >
            <a-select-option value="male">
              male
            </a-select-option>
            <a-select-option value="female">
              female
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" @submit="handleSubmit">
            发布
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this, { name: 'order' })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // 处理验证通过
          this.$message.success('验证通过！请在F12的Console看表单数据')
          console.log('验证通过的表单内容', values)

          // 需阅读对应接口
          // createOrder(values).then(response => {
          //   // 打印接口返回数据
          //   console.log(response)
          // })

          // 如不想创建接口访问，想来点快的，可使用这写法
          // this.$http.post('/order', values).then(response => {
          //   console.log(response)
          // })
        } else {
          // 处理验证不通过
          // this.$message.info('表单验证失败')
        }
      })
    }
  }
}
</script>

```