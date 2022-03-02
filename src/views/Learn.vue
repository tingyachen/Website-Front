<template>
<div id="learn" v-cloak>
   <vue-tinder
    ref="tinder"
    :queue.sync="queue"
    @submit="submit"
    key-name="_id"
    >
    <template slot-scope="{data}">
      <img :src="data.image">
      <h2>{{data.name}}</h2>
      <p style="font-size: 25px;">{{data.description}}</p>
      <button @click="testVoice(data.name)" style="border-radius: 50%;border: 1px solid #fff;background: #c7d3e6;line-height: 50px;width: 55px;"><font-awesome-icon icon="volume-high"/></button>
      <router-link to="/read">
      <button style="border-radius: 50%;border: 1px solid #fff;background: #c7d3e6;line-height: 50px;width: 55px;"><font-awesome-icon icon="arrow-right-from-bracket"/></button>
      </router-link>
    </template>
    <img class="like-pointer" slot="like" src="../assets/img/stamp.png">
    <img class="nope-pointer" slot="nope" src="../assets/img/ok.png">
  </vue-tinder>
  <div class="btns">
    <button @click="decide('nope')"><font-awesome-icon icon="remove" style="color: #a8a9ae"/></button>
    <button @click="decide('like')"><font-awesome-icon icon="heart" style="color: #FFACE4;"/></button>
  </div>
</div>
</template>

<script>
import VueTinder from 'vue-tinder'
export default ({
  name: 'learn',
  data () {
    return {
      queue: []
    }
  },
  components: {
    VueTinder
  },
  methods: {
    /**
     * 点击按钮所绑定的方法，此方法为调用vue-tinder组件内方法的示例，仅供参考
     * @method submit
     * @param  {String} choice
     */
    decide (choice) {
      this.$refs.tinder.decide(choice)
    },
    /**
     * 自定义事件submit绑定的方法，移除卡片的回调
     * @method submit
     * @param  {Object} choice {type,key}
     */
    submit (choice) {
      switch (choice) {
        case 'nope': // 左滑
          break
        case 'like': // 右滑
          break
        case 'super': // 上滑
          break
      }
      if (this.queue.length < 2) {
        this.getData()
      }
    },
    testVoice (txt) {
      this.msg.text = txt
      speechSynthesis.speak(this.msg)
    }
  },
  computed: {
    msg () {
      return this.$store.state.msg
    }
  },
  async created () {
    const { data } = await this.api.get('/products')
    this.queue = data.result
  }
})
</script>

<style>
#learn{
  overflow:hidden;
  height: 100%;
}

/* 直接script引用建議增加，不然会引发闪烁，单文件组件不需要 */
[v-cloak] { display: none; }

/* 注意！物件的寬高一定要設定，不然出不來！！！ */
#learn .vue-tinder {
  position: absolute;
  z-index: 10;
  left: 10px;
  right: 0;
  top: 160px;
  margin: auto;
  width: calc(100% - 20px);
  height: 500px;
  min-width: 300px;
  max-width: 355px;
}

.tinder-card {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
}

.nope-pointer { right: 10px; }
.like-pointer { left: 10px; }
.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}
.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

/* slot内图片样式 */
.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  text-align: center;
}

/* 按钮样式 */
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  margin: auto;
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
  cursor: pointer;
}
.btns button{
  border-radius: 50%;
  line-height: 60px;
  width: 60px;
  border: 0;
  background: #FFFFFF;
  display: inline-block;
  margin: 0 8px;
  font-size: 32px;
  vertical-align: middle;
}
</style>
