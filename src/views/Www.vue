<template>
  <div id="www">
  <b-container>
    <b-row>
      <b-col cols="12">
        <carousel :perPage="3">
          <slide class="p-2">
            <b-card title="満員電車" style="text-align: center;" img-src="../assets/img/www1.jpg"  img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show">
                人擠人的電車上
              </b-card-text>
              </transition>
              <b-button href="#" pill variant="outline-info" @click="show =!show">點我看中翻</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="銃弾の避け方が独特" style="text-align: center;" img-src="../assets/img/www2.jpg"  img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show1">
                躲子彈的一百種姿勢
              </b-card-text>
              </transition>
              <b-button href="#" pill variant="outline-info" @click="show1 =!show1">點我看中翻</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="彼女の彼氏が来た時 v.s 息子の彼女が来た時" style="text-align: center;" img-src="../assets/img/www3.jpg"  img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show2">
                女兒的男友來家裡玩 v.s 兒子的女友來家裡玩
              </b-card-text>
              </transition>
              <b-button href="#" pill variant="outline-info" @click="show2 =!show2">點我看中翻</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="殿、接種会場に着いてからでいいですぞ" style="text-align: center;" img-src="../assets/img/www4.jpg" img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show3">
                陛下，您可以直接前往施打疫苗
              </b-card-text>
              </transition>
              <b-button href="#" pill variant="outline-info" @click="show3 =!show3">點我看中翻</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="卒業アルバムの写真" style="text-align: center;" img-src="../assets/img/www5.jpg" img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show4">
                畢業紀念冊照片
              </b-card-text>
               </transition>
              <b-button href="#" pill variant="outline-info" @click="show4 =!show4">點我看中翻</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="ここに置いてた検尿カップしりませんか？" style="text-align: center;" img-src="../assets/img/www6.jpg" img-top tag="article">
            <transition name="slide-fade">
              <b-card-text v-if="show5">
                有看到放在這裡的驗尿杯子嗎?
              </b-card-text>
               </transition>
              <b-button href="#" pill variant="outline-info" @click="show5 =!show5">點我看中翻</b-button>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default ({
  name: 'app',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
})
</script>
<style >
.row {
  margin-top:100px;
}
.card-title {
  font-weight: 600;
  line-height: 40px;
}
.card {
  box-shadow: 0 20px 30px -10px #ccc;
}
.show {
  visibility: visible;
}
.hidden {
  visibility: hidden;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,.slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

</style>
