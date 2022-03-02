<template>
  <div id="news">
  <div class="wrapper">
    <div class="book" :class="{'book-expanded':open}">
      <div class="book__cover" @click="open = true">
        <div class="header-image">
          <div class="overlay">
            <img src="../assets/img/letter.png" alt="">
          </div>
        </div>
        <div class="title-wrap">
          <h1 class="article-title">
            <ruby>手紙 <rt>てがみ</rt> </ruby>
          </h1>
        </div>
      </div>
      <div class="book__content">
        <div class="close-btn" @click="open = false">
          <img src="../assets/img/close-btn.png" alt="" width="50px" height="50px" >
        </div>
        <p>
          アンナさん<br>
          <ruby>今週 <rt>こんしゅう</rt> </ruby>はしごとがたくさんあります。
          <ruby>土曜日 <rt>どようび</rt> </ruby>と
          <ruby>日曜日 <rt>にちようび</rt> </ruby>もいそがしいです。
          <ruby>来週 <rt>らいしゅう</rt> </ruby>の
          <ruby>月曜日 <rt>げつようび</rt> </ruby>に
          <ruby>来<rt>き</rt> </ruby>てください。
        </p>
        <router-link to="/reading">
        <div class="box bg-2" style="font-size: 15px;">
<button class="button button--moema button--border-thick button--size-s">次へ</button>
        </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'learn',
  data () {
    return {
      open: false
    }
  }
}
</script>
