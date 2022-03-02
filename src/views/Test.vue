<template>
<div id="test">
  <div class="container-app">
        <div class="container-quiz">
          <div class="header-quiz">
            <h1>テスト</h1>
          </div>
          <div class="step-progress" :style="{'width':progress + '%'}"></div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              <div class="box-question">
                <h1>Question {{b}}/{{questions.length}}</h1>
                <p>{{question.question}}</p>
              </div>
              <div class="box-propositions">
                <ul>
                  <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">{{proposition.props}} <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div><div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div></li>
                </ul>
              </div>
          </div>
          <div class="box-score" v-if="score_show">
              <h2>点数：</h2>
              <h2>{{score}}/{{questions.length}}</h2>
              <div class="btn-restart">
                  <button @click="restartQuiz">もう一度 <i class="fas fa-sync-alt"></i></button>
              </div>
          </div>
          <div class="footer-quiz">
                <div v-if="progress < 100" class="box-button">
                    <button  @click="skipQuestion()" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">パス</button>
                    <button  @click="nextQuestion()" :style="!next ? 'background-color: rgb(106, 128, 202)' : ''">次へ</button>
                </div>
          </div>
        </div>
  </div>
</div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  data () {
    return {
      questions: [
        {
          question: '"新しい"くるまですね。',
          propositions: [
            { props: 'あたらしい', correct: true },
            { props: 'あだらしい' },
            { props: 'あらだしい' },
            { props: 'あらたしい' }
          ]
        },
        {
          question: 'あの"ほてる"はゆうめいです。',
          propositions: [
            { props: 'ホテラ' },
            { props: 'ホテハ' },
            { props: 'ホテル', correct: true },
            { props: 'ホラル' }
          ]
        },
        {
          question: 'ここは（＿＿＿＿＿）です。べんきょうできません。',
          propositions: [
            { props: 'さむい' },
            { props: 'くらい' },
            { props: 'うるさい', correct: true },
            { props: 'あぶない' }
          ]
        },
        {
          question: '弟はへや（＿＿）そうじをしました。',
          propositions: [
            { props: 'が' },
            { props: 'の', correct: true },
            { props: 'を' },
            { props: 'に' }
          ]
        },
        {
          question: '私はデパートにつとめています。',
          propositions: [
            { props: '私はデパートでかいものをしています。' },
            { props: '私はデパートでさんぽをしています。' },
            { props: '私はデパートでやすんでいます。' },
            { props: '私はデパートでしごとをしています。', correct: true }
          ]
        },
        {
          question: 'ふねでにもつを"おくります"。',
          propositions: [
            { props: '踊ります' },
            { props: '送ります', correct: true },
            { props: '近ります' },
            { props: '怒ります' }
          ]
        }
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0
    }
  },
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
  },
  methods: {
    selectResponse (e) {
      this.correct = true
      this.next = false
      if (e.correct) {
        this.score++
      }
    },
    check (status) {
      if (status.correct) {
        return 'correct'
      } else {
        return 'incorrect'
      }
    },
    nextQuestion () {
      if (this.next) {
        return
      }
      this.progress = this.progress + (100 / this.questions.length)
      if (this.questions.length - 1 === this.a) {
        this.score_show = true
        this.quiz = false
      } else {
        this.a++
        this.b++
        this.correct = false
        this.next = true
      }
    },
    skipQuestion () {
      if (!this.next) {
        return
      }
      this.progress = this.progress + (100 / this.questions.length)
      if (this.questions.length - 1 === this.a) {
        this.score_show = true
        this.quiz = false
      } else {
        this.a++
        this.b++
      }
    },
    restartQuiz () {
      Object.assign(this.$data, this.$options.data()) // reset data in vue
    }
  }
}
</script>
<style>
/* * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    letter-spacing: 2px;
} */

.container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: white;
    text-align: center;
    flex-flow: column;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}

.container-quiz .box {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.box-question {
    margin-top: 20px;
}

.box-question p {
    font-size: 30px;
    margin-top: 20px;
}

.box-question img {
  width: 100px;
  height: 100px;
}

.box-propositions {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: center;
}

.box-propositions ul {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

.box-propositions li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

.box-propositions li:hover {
    /*transform: scale(1.1);*/
    background-color: #e7eae0;
}

.box-propositions li>div {
    float: right;
    margin-top: 7px;
    margin-right: 7px;
    color: white;
}

.check {
    color: rgb(74, 219, 74);
}

.close {
    color: rgb(240, 117, 100);
}

.footer-quiz {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-button {
    display: flex;
    width: 100%;
}

.footer-quiz .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
    background-color: #a09f9ff5;
}

li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2 {
    margin-top: 40px;
}

i {
    display: none;
    color: white;
}

.step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
}

.btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}

.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    background-color: rgb(106, 128, 202);
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.next {
    background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
    .container-quiz {
        width: 60%;
    }
}

@media screen and (max-width: 720px) {
    .container-quiz {
        width: 80%;
    }
    .footer-quiz .box-button button {
        width: 100px;
    }
}
</style>
