<template>
  <div id="news">
  <div class="wrapper">
    <div class="book" :class="{'book-expanded':open}">
      <div class="book__cover" @click="open = true">
        <div class="header-image">
          <div class="overlay">
            <img src="../assets/img/money_kinri_agaru.png" alt="">
          </div>
        </div>
        <div class="title-wrap">
          <h1 class="article-title">
            <ruby>日本 <rt>にほん</rt> </ruby>
            の
            <ruby>物価 <rt>ぶっか</rt> </ruby>
          </h1>
        </div>
      </div>
      <div class="book__content">
        <div class="close-btn" @click="open = false">
          <img src="../assets/img/close-btn.png" alt="" width="50px" height="50px" >
        </div>
        <p>
          <ruby>日本 <rt>にほん</rt> </ruby>の<ruby>物価 <rt>ぶっか</rt> </ruby>は<ruby>高 <rt>たか</rt>
          </ruby>いです。<ruby>学生 <rt>がくせい
            </rt> </ruby>の<ruby>生活 <rt>せいかつ</rt> </ruby>もたいへんです。
          わたしは<ruby>今月 <rt>こんげつ</rt> </ruby>のはじめからアルバイトを<ruby>始<rt>はじ</rt> </ruby>めました。<ruby>日本語<rt>にほんご</rt>
          </ruby>は<ruby>上手 <rt>じょうず</rt> </ruby>ではありません。<ruby>簡単<rt>かんたん</rt> </ruby>な<ruby>仕事<rt>しごと</rt>
          </ruby>をします。<ruby>週<rt>しゅう</rt> </ruby>に<ruby>二回<rt>にかい</rt> </ruby>レストランで
          <ruby>働<rt>はたら</rt> </ruby>きます。<ruby>仕事<rt>しごと</rt> </ruby>は6<ruby>時<rt>じ</rt> </ruby>から10<ruby>時<rt>じ</rt>
          </ruby>までです。<ruby>店<rt>みせ</rt> </ruby>でもよく<ruby>日本語<rt>にほんご</rt> </ruby>を<ruby>習<rt>なら</rt>
          </ruby>います。<ruby>店<rt>みせ</rt> </ruby>の<ruby>人<rt>ひと</rt> </ruby>はみんな<ruby>日本語<rt>にほんご</rt>
          </ruby>の<ruby>先生<rt>せんせい</rt> </ruby>です。
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

<style>
#news {
  height: 100vh;
  position: relative;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
  .mr2 {
      margin-right: 1rem;
    }

    .ml2 {
      margin-left: 1rem;
    }

    .article-title {
      font-size: 2.5rem;
      line-height: 1;
      padding-top: 100px;
      text-align: center;
      letter-spacing: 0.025em;
      transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
      color: #000;
    }

    .header-image {
      height: 250px;
      background-size: cover;
      background-position: center;
      margin-bottom: 3rem;
      position: relative;
      transition: all 0.45s ease-in-out;
    }

    .overlay {
      display: flex;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      margin-top: 50px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .title-wrap {
      transform: translateY(0);
      transition: transform 0.45s ease-in;
    }

    .drop-cap {
      font-size: 55px;
      line-height: 28px;
    }

    .wrapper {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .book__cover {
      height: 100%;
      cursor: pointer;
    }

    .book__content {
      position: relative;
      text-align: justify;
      margin-right: 20px;
      word-wrap: break-word;
      font-size: 1.1rem;
      opacity: 0;
      transition: all 1.5s ease-in-out;
      max-width: 750px;
      margin: 0 auto 2rem;
      padding: 0 2rem;
    }

    .book__content p {
      letter-spacing: 5px;
      line-height: 4;
      color: #3a3a3a;
      margin-bottom: 2.5rem;
    }

    .book {
      overflow: hidden;
      background: white;
      height: 580px;
      width: 400px;
      box-shadow: 0 20px 30px -10px #ccc;
      transition: all 0.5s ease-in-out;
    }

    .book:hover {
      box-shadow: 0 6px 50px 10px #cfcfcf;
    }

    .book-expanded {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
    }

    .book-expanded .overlay {
      opacity: 0.95;
    }

    .book-expanded .article-title {
      display: none;
    }

    .book-expanded .title-wrap {
      transform: translateY(-300px);
      color: white;
    }

    .book-expanded .book__cover-exerpt {
      opacity: 0;
    }

    .book-expanded .book__cover {
      height: 460px;
      margin-bottom: 6rem;
    }

    .book-expanded .book__content {
      opacity: 1;
    }

    .book-expanded .header-image {
      height: 100%;
    }

    .close-btn {
      position: absolute;
      top: -500px;
      right: 60px;
      cursor: pointer;
    }

    span {
      margin-left: -35px;
    }

    span .fa {
      font-size: 17px;
      margin-left: 20px;
    }
/* ------------ button ------------------ */
.button {
float: left;
min-width: 150px;
max-width: 250px;
display: block;
margin: 1em;
padding: 1em 2em;
border: none;
background: none;
color: inherit;
position: relative;
z-index: 1;
-moz-osx-font-smoothing: grayscale;
}
.button:focus {
outline: none;
}
.button > span {
vertical-align: middle;
}
.button--moema {
padding: 1.5em 3em;
border-radius: 50px;
background: #7986cb;
color: #fff;
-webkit-transition: background-color 0.3s, color 0.3s;
transition: background-color 0.3s, color 0.3s;
}
.button--moema.button--inverted {
background: #ECEFF1;
color: #37474f;
}
.button--moema::before {
content: '';
position: absolute;
top: -20px;
left: -20px;
bottom: -20px;
right: -20px;
background: inherit;
border-radius: 50px;
z-index: -1;
opacity: 0.4;
-webkit-transform: scale3d(0.8, 0.5, 1);
transform: scale3d(0.8, 0.5, 1);
}
.button--moema:hover {
-webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
color: #ECEFF1;
background-color: #556bda;
-webkit-animation: anim-moema-1 0.3s forwards;
animation: anim-moema-1 0.3s forwards;
}
.button--moema.button--inverted:hover {
color: #ECEFF1;
background-color: #bf96e6;
}
.button--moema:hover::before {
-webkit-animation: anim-moema-2 0.3s 0.3s forwards;
animation: anim-moema-2 0.3s 0.3s forwards;
}
@-webkit-keyframes anim-moema-1 {
60% {
-webkit-transform: scale3d(0.8, 0.8, 1);
transform: scale3d(0.8, 0.8, 1);
}
85% {
-webkit-transform: scale3d(1.1, 1.1, 1);
transform: scale3d(1.1, 1.1, 1);
}
100% {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes anim-moema-1 {
60% {
-webkit-transform: scale3d(0.8, 0.8, 1);
transform: scale3d(0.8, 0.8, 1);
}
85% {
-webkit-transform: scale3d(1.1, 1.1, 1);
transform: scale3d(1.1, 1.1, 1);
}
100% {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@-webkit-keyframes anim-moema-2 {
to {
opacity: 0;
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes anim-moema-2 {
to {
opacity: 0;
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
.box {
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-justify-content: center;
justify-content: center;
}
</style>
