<template>
  <div id='home' @keyup.13 ='delta(1)'>
    <div id="top-up">
      <a href="" class="logo">
        <img src="../assets/img/momoLogo.png" alt=""  width="120px" height="85px">
      </a>
    </div>
    <div class='postarea'>
        <div class='posts' :style='computed_left'>
            <div class='post_box' v-for='(w,id) in works' :key='id' :class='{cur_item: id==now_index}'>
              <router-link to="/learn">
                <div class='cover' :style='bg_css(w.cover)'>
                    <div class='infos'>
                        <h1>{{w.title}}</h1>
                        <h5 style="font-weight: 600;">{{w.description}}</h5>
                    </div>
                </div>
              </router-link>
            </div>
        </div>
    </div>
    <div class='control_left' @click='delta(-1)'><font-awesome-icon icon="angle-left"/></div>
    <div class='control_right' @click='delta(1)'><font-awesome-icon icon="angle-right"/></div>
</div>
</template>
<script>
const works = [
  {
    title: 'N5',
    description: '能讀懂平、片假名',
    cover: require('../assets/img/peach.png')
  },
  {
    title: 'N4',
    description: '能理解基礎日語',
    cover: require('../assets/img/old.png')
  },
  {
    title: 'N3',
    description: '大致理解日常生活用語',
    cover: require('../assets/img/momotarou.png')
  },
  {
    title: 'N2',
    description: '能讀懂報紙、雜誌等文章',
    cover: require('../assets/img/shima.png')
  },
  {
    title: 'N1',
    description: '能理解較複雜、抽象的文章',
    cover: require('../assets/img/oni.png')
  }
]

export default ({
  name: 'home',
  data () {
    return {
      works: works,
      now_index: 0,
      span_width: 930
    }
  },
  computed: {
    computed_left: function () {
      var result = {
        left: (-this.now_index * this.span_width) + 'px'
      }
      // console.log(result);
      return result
    }
  },
  methods: {
    delta (d) {
      this.now_index =
        (this.now_index + d + this.works.length) % this.works.length
    },
    bg_css (url) {
      return {
        'background-image': 'url(' + url + ')'
      }
    }
  }
})
</script>
<style>
#home {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  align-items: center; }

#top-up {
  position: absolute;
  top: 20px;
  left: 48%;
}

.postarea {
  width: 930px;
  height: 250px;
  white-space: nowrap; }

.posts {
  height: 100%;
  position: relative;
  transition: 0.5s; }

.post_box {
  display: inline-block;
  height: 100%; }
  .post_box .cover {
    width: 330px;
    height: 125%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 300px;
    margin-right: 300px;
    background-size: cover;
    background-position: center center;
    transition: 0.3s;
    cursor: pointer; }
    .post_box .cover:hover {
      width: 360px;
      height: 130%; }
      .post_box .cover:hover .infos {
        transform: translate(-190px, 25px); }
    .post_box .cover .infos {
      color: white;
      transform: translate(-200px, 10px);
      text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
      transition: 0.3s; }
      .post_box .cover .infos * {
        margin: 0; }
      .post_box .cover .infos h1 {
        font-size: 40px;
        font-weight: 400;
        margin-bottom: 10px; }
      .post_box .cover .infos h5 {
        background-color: white;
        color: black;
        padding: 4px 12px;
        font-size: 20px;
        font-weight: 300;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3); }

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(30px, 0);
    filter: saturate(0); }
  100% {
    opacity: 1;
    transform: translate(0px, 0); } }

@keyframes silceIn {
  0% {
    transform: translateX(-50px); }
  100% {
    transform: translateX(0px); } }

.cur_item .cover {
  animation: fadeIn 1s ease both; }

.cur_item .infos h5 {
  animation: silceIn 1s 0.1s ease; }

.control_left, .control_right {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 1px white;
  position: fixed;
  color: white;
  font-size: 30px;
  transition: 0.3s; }
  .control_left:hover, .control_right:hover {
    background-color: white;
    color: black; }

.control_left {
  left: 50px; }

.control_right {
  right: 50px; }

</style>
