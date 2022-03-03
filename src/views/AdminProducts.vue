<template lang="pug">
#adminproduct
  b-btn.my-3(pill block variant="success" v-b-modal.modal-product) 新增
  b-table(:items="products" :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style='height: 50px')
    template(#cell(sell)='data')
      | {{ data.item.sell ? 'v' : '' }}
    template(#cell(action)='data')
      b-btn(variant='success' @click='editProduct(data.index)') 編輯
  b-modal#modal-product(
    :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
    centered
    ok-variant='success'
    ok-title='送出'
    cancel-variant='danger'
    cancel-title='取消'
    @ok="submitModal"
    @hidden="resetForm"
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
  )
    b-form-group(
      label='日文單字'
      label-for='input-name'
      description='必填欄位'
      invalid-feedback='日文單字必填'
      :state='state.name'
    )
      b-form-input#input-name(
        v-model='form.name'
        type='text'
        required
        placeholder='請輸入單字'
        :state='state.name'
      )
    b-form-group(
      label='日檢級數'
      label-for='input-category'
      description='必填欄位'
      invalid-feedback='級數必填'
      :state='state.category'
    )
      b-form-select#input-category(
        v-model='form.category'
        required
        :options="categories"
        placeholder='請輸入級數'
        :state='state.category'
      )
    b-form-group(
      label='五十音'
      label-for='input-description'
      description='必填欄位'
      invalid-feedback='五十音必填'
      :state='state.description'
    )
      b-form-textarea#input-description(
        v-model='form.description'
        required
        rows="3"
        max-rows="6"
        placeholder='請輸入五十音'
      )
    img-inputer(
      accept="image/*"
      v-model="form.image"
      theme="light"
      size="large"
      bottom-text="點選或拖拽圖片以修改"
      hover-text="點選或拖拽圖片以修改"
      placeholder="點選或拖拽選擇圖片"
      :max-size="1024"
      exceed-size-text="檔案大小不能超過"
    )
</template>

<script>
export default {
  data () {
    return {
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '單字' },
        { key: 'category', label: '級數' },
        { key: 'description', label: '五十音' },
        { key: 'action', label: '操作' }
      ],
      products: [],
      modalSubmitting: false,
      categories: [
        { text: '請選擇等級', value: '' },
        'N1', 'N2', 'N3', 'N4', 'N5'
      ],
      form: {
        name: '',
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.category) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          this.$refs.table.refresh()
        }

        this.$bvModal.hide('modal-product')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }

      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.$bvModal.show('modal-product')
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
