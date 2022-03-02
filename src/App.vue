<template>
  <div id="app">
    <b-list-group>
      <b-avatar variant="light" size="lg" id="popover-target-1"></b-avatar>
      <b-popover target="popover-target-1" triggers="hover" placement="bottom">
    <template #title>歡迎光臨!</template>
                    <b-nav-item v-if="!user.isLogin" to="/login" style="font-size: 23px;">🐵 登入 / 註冊</b-nav-item>
                    <!-- <b-nav-item v-if="user.isLogin" to="/orders">訂單</b-nav-item> -->
                    <b-nav-item v-if="user.isLogin &amp;&amp; user.isAdmin" to="/admin" style="font-size: 23px;letter-spacing: 5px;">🐶 管理</b-nav-item>
                    <b-nav-item v-if="user.isLogin" @click="logout" style="font-size: 23px;letter-spacing: 5px;">🍑 登出</b-nav-item>
  </b-popover>
    </b-list-group>
    <div class="burger">
      <b-button v-b-toggle.my-sidebar>
        <img src="./assets/img/daruma.png" alt=""  width="90px" height="90px">
      </b-button>
    </div>
    <b-sidebar id="my-sidebar">
      <ul class="nav__list">
        <li class="nav__item"><router-link to="/learn" class="nav__link">單字</router-link></li>
        <li class="nav__item"><router-link to="/read" class="nav__link">閱讀</router-link></li>
        <li class="nav__item"><router-link to="/test" class="nav__link">測驗</router-link></li>
        <li class="nav__item"><router-link to="/word" class="nav__link">單字卡</router-link></li>
        <li class="nav__item"><router-link to="/www" class="nav__link">www</router-link></li>
      </ul>
    </b-sidebar>
    <div id="sakura_block">
    <div class="sakura_parts_box">
      <img src="./assets/img/sakura/parts_01.png" class="parts_01">
      <img src="./assets/img/sakura/parts_02.png" class="parts_02">
      <img src="./assets/img/sakura/parts_03.png" class="parts_03">
      <img src="./assets/img/sakura/parts_04.png" class="parts_04">
      <img src="./assets/img/sakura/parts_05.png" class="parts_05">
      <img src="./assets/img/sakura/parts_06.png" class="parts_06">
      <img src="./assets/img/sakura/parts_07.png" class="parts_07">
      <img src="./assets/img/sakura/parts_01.png" class="parts_08">
      <img src="./assets/img/sakura/parts_02.png" class="parts_09">
      <img src="./assets/img/sakura/parts_03.png" class="parts_10">
      <img src="./assets/img/sakura/parts_04.png" class="parts_11">
      <img src="./assets/img/sakura/parts_05.png" class="parts_12">
      <img src="./assets/img/sakura/parts_06.png" class="parts_13">
      <img src="./assets/img/sakura/parts_07.png" class="parts_14">
      <img src="./assets/img/sakura/parts_01.png" class="parts_15">
      <img src="./assets/img/sakura/parts_02.png" class="parts_16">
      <img src="./assets/img/sakura/parts_03.png" class="parts_17">
      <img src="./assets/img/sakura/parts_04.png" class="parts_18">
      <img src="./assets/img/sakura/parts_05.png" class="parts_19">
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    },
    login () {
      this.$store.dispatch('user/login')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
    // ======== voice =======
    this.$store.commit('getVoices')
    // ================
  }
}
</script>

<style>
* {
  list-style: none;
}

    #app {
      font-family: basic-sans, sans-serif;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.125em;
      line-height: 1.6;
      overflow: hidden;
      position: relative;
      background: linear-gradient(200deg, #f1dee1, #c7d3e6);
    }
/* ---------------- user -------------------- */
    #app .list-group {
      position: absolute;
      top: 42px;
      right: 35px;
      width: 56px;
      height: 56px;
    }
/* ---------------- burger menu -------------------- */
    .btn.btn-secondary {
      position: absolute;
      top: 20px;
      left: -5px;
      border-radius: 0 10px 10px 0;
      background: #ffc0c0;
      border-color: lightpink;
    }

    .btn.btn-secondary:focus {
      background: #ffc0c0;
      border-color: lightpink;
    }

    .btn.btn-secondary:hover {
      border-color: lightpink;
      border-color: #fff;
      background: #f0cccc;
    }

    .b-sidebar-header {
      background: #ffc0c0;
    }

    .logo {
      position: absolute;
      left: 47%;
      top: 2%;
    }

    .nav__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 3em 6em;
      justify-content: space-evenly;
      align-items: center;
      background: #ffc0c0;
    }

    .nav__item {
      margin-bottom: 3em;
    }

    .nav__link {
      text-decoration: none;
      color: #717171;
      font-size: 30px;
      font-weight: 700;
    }

    .nav__link:hover {
      text-decoration: underline;
      color: black;
    }

    .nav__toggle {
      position: absolute;
      top: 6em;
      right: -186px;
      transform: translateX(-100%);
      background: #ffc0c0;
      padding: 1em .5em;
      border: 0;
      border-radius: 0 1em 1em 0;
      cursor: pointer;
    }
/* -------------------- 花瓣 ------------------- */
#sakura_block {
      width: 90%;
      height: 100vh;
      position: absolute;
    }

    #sakura_block .sakura_parts_box {
      width: 90%;
      height: 100vh;
      position: relative;
    }

    #sakura_block .sakura_parts_box img {
      position: absolute;
    }

    #sakura_block .sakura_parts_box img:nth-child(2n+1) {
      width: 13px;
      /*花瓣的大小*/
    }

    #sakura_block .sakura_parts_box img:nth-child(2n) {
      width: 15px;
      /*花瓣的大小*/
    }

    /*------------------ 花瓣位置 -----------------*/
    img.parts_01 {
      top: 0;
      left: 5%;
    }

    img.parts_02 {
      top: 0;
      left: 12%;
    }

    img.parts_03 {
      top: 50%;
      left: 15%;
    }

    img.parts_04 {
      top: 5%;
      left: 22%;
    }

    img.parts_05 {
      top: 50%;
      left: 25%;
    }

    img.parts_06 {
      top: 5%;
      left: 28%;
    }

    img.parts_07 {
      top: 30%;
      left: 35%;
    }

    img.parts_08 {
      top: 30%;
      left: 40%;
    }

    img.parts_09 {
      top: 15%;
      left: 43%;
    }

    img.parts_10 {
      top: 15%;
      left: 50%;
    }

    img.parts_11 {
      top: 0;
      left: 55%;
    }

    img.parts_12 {
      top: 30%;
      left: 60%;
    }

    img.parts_13 {
      top: 30%;
      left: 63%;
    }

    img.parts_14 {
      top: 0;
      left: 70%;
    }

    img.parts_15 {
      top: 50%;
      left: 75%;
    }

    img.parts_16 {
      top: 50%;
      left: 81%;
    }

    img.parts_17 {
      top: 15%;
      left: 85%;
    }

    img.parts_18 {
      top: 50%;
      left: 90%;
    }

    img.parts_19 {
      top: 0;
      left: 93%;
    }

    @keyframes sakura {
      0% {
        opacity: 0;
      }

      20% {
        transform: translate(3px, 30px) rotate(20deg);
        opacity: 1;
      }

      30% {
        transform: translate(0, 50px) rotate(50deg);
      }

      50% {
        transform: translate(-20px, 100px) rotate(150deg);
      }

      70% {
        transform: translate(-40px, 150px) rotate(-50deg);
        opacity: .8;
      }

      90% {
        transform: translate(-60px, 200px) rotate(-180deg);
      }

      100% {
        transform: translate(-70px, 230px);
        opacity: 0;
      }
    }

    .sakura_parts_box img {
      animation: sakura linear 6s infinite;
      opacity: 0;
    }

    /*----------------動畫開始時間--------------*/
    img.parts_01,
    img.parts_04,
    img.parts_07,
    img.parts_10,
    img.parts_08,
    img.parts_11,
    img.parts_13,
    img.parts_16,
    img.parts_19 {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }

    img.parts_02,
    img.parts_05 {
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }

    img.parts_03,
    img.parts_06,
    img.parts_09,
    img.parts_12 {
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
    }

    img.parts_08,
    img.parts_11,
    img.parts_13,
    img.parts_16,
    img.parts_19 {
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }

    img.parts_14,
    img.parts_17 {
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }

    img.parts_15,
    img.parts_18 {
      -webkit-animation-delay: 5s;
      animation-delay: 5s;
    }
</style>
