<template>
<div id="table">
    <b-input-group class="mt-3 mb-3" size="sm">
        <b-form-input v-model="keyword" placeholder="Search" type="text"></b-form-input>
        <b-input-group-text slot="append">
            <b-btn class="p-0" :disabled="!keyword" variant="link" size="sm" @click="keyword = ''"><font-awesome-icon icon="magnifying-glass"/></b-btn>
        </b-input-group-text>
    </b-input-group>
    <b-table :fields="fields" :items="items" :keyword="keyword"></b-table>
</div>
</template>
<script>
export default ({
  name: 'table',
  data () {
    return {
      keyword: '',
      dataArray: [
        { 會員名: 'aaaa', 級數: 'N2', email: 'aaaa@gmail.com' },
        { 會員名: 'zzz456', 級數: 'N1', email: '123456@example.com' },
        { 會員名: 'asd897', 級數: 'N4', email: 'sdaw@example.com' },
        { 會員名: 'sdad', 級數: 'N1', email: 'sdfasae@example.com' }
      ],
      fields: [
        { key: '會員名', label: '會員名', sortable: true },
        { key: '級數', label: '級數', sortable: true },
        { key: 'email', label: 'Email', sortable: true }
      ]
    }
  },
  computed: {
    items () {
      return this.keyword
        ? this.dataArray.filter(item => item.會員名.includes(this.keyword) || item.級數.includes(this.keyword) || item.email.includes(this.keyword))
        : this.dataArray
    }
  }
})
</script>
<style>
#table {
margin: 0 auto;
width: 1100px;
}
#table .input-group-text {
height: 31px;
}
#table .input-group-text .fa {
font-size: 12px;
}
.input-group-append {
margin-top: 8px;
height: 31px;
}
</style>
