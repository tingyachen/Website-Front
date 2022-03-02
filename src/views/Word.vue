<template>
    <div id="word" class="word-box">
    <h1 style="color: #000;">製作單字卡</h1>
    <div class="flashcard-form">
      <label for="front">日文
        <input v-model="newFront" type="text" id="front">
      </label>
      <label for="back">中文
        <input v-on:keypress.enter="addNew" v-model="newBack" type="text" id="back">
      </label>
      <button class="add" v-on:click="addNew">新增</button>
      <span v-show="error" class="error">請重新輸入，不可為空</span>
    </div>

    <ul class="flashcard-list">
      <li v-on:click="toggleCard(card)" v-for="(card, index) in cards" :key='index'>
        <transition name="flip">
          <p v-bind:key="card.flipped" class="wordCard">
              {{ card.flipped ? card.back : card.front }}
              <span v-on:click="cards.splice(index, 1)" class="delete-card">X</span>
          </p>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
const cards = [
  {
    front: 'テレビ',
    back: '電視',
    flipped: false
  },
  {
    front: 'ふゆ',
    back: '冬天',
    flipped: false
  },
  {
    front: 'あさ',
    back: '早上',
    flipped: false
  },
  {
    front: 'スカート',
    back: '裙子',
    flipped: false
  }
]

export default ({
  name: 'flashcard-app',
  data () {
    return {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    }
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped
    },
    addNew: function () {
      if (!this.newFront || !this.newBack) {
        this.error = true
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        })
        // set the field empty
        this.newFront = ''
        this.newBack = ''
        // Make the warning go away
        this.error = false
      }
    }
  }
})
</script>

<style>
  #word {
    text-align: center;
  }

  .flashcard-list {
    padding-left: 0;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .flashcard-list li {
    list-style-type: none;
    padding: 10px 10px;
    transition: all 0.3s ease;
  }

  .word-box {
    max-width: 100%;
    padding: 2em;
  }

  .word-box h1 {
    position: absolute;
    top: 260px;
    left: 43%;
    margin-bottom: 20px;
    overflow: hidden;
  border-right: 0.15em solid rgb(0, 0, 0);
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(11, end),
    cursor-blink 0.75s step-end infinite;
  }

  @keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 13%;
  }
}

/* The typewriter cursor effect */
@keyframes cursor-blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(0, 0, 0);
  }
}

  .wordCard {
    display: block;
    width: 185px;
    height: 205px;
    padding: 85px 25px;
    background-color: #f5b994;
    border-radius: 7px;
    margin: 5px;
    text-align: center;
    line-height: 27px;
    cursor: pointer;
    position: relative;
    color: #fff;
    font-weight: 600;
    font-size: 25px;
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
  }

  li:hover{
    transform: scale(1.1);
  }

  li:nth-child(-n+3) .wordCard{
    background-color: #78ceb9;
    }

  li:nth-child(2n+1) .wordCard{
    background-color: #ccabdb;
    }

  li:nth-child(4n) .wordCard{
    background-color: #ffdd94;
    }

  li:nth-child(5n-2) .wordCard{
    background-color: #7f95d1;
    }

  li:nth-child(4n+4) .wordCard{
    background-color: #e79796;
    }

  li:nth-child(-7n+7) .wordCard{
    background-color: #dc9fb4;
    }

  .delete-card {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    opacity: .4;
    transition: all 0.5s ease;
  }

  .delete-card:hover, .error {
    opacity: 1;
    transform: rotate(360deg);
  }

  .flip-enter-active {
    transition: all 0.4s ease;
  }

  .flip-leave-active {
    display: none;
  }

  .flip-enter, .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;

  }

  /* Form */
  .flashcard-form{
    position: relative;
  }

  .flashcard-form label{
    font-weight: 400;
    color: #333;
    margin-right: 20px;
  }

  #front,
  #back {
    border-radius: 20px;
    border: 2px solid #746f6f;
    padding: 8px;
    outline: none;
    color: #333;
  }

  .add {
    border-radius: 5px;
    border: 1px solid #87cb84;
    background-color: #87cb84;
    padding: 8px 15px;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add:hover{
    background-color: #70a66f;
  }

  .error{
    margin-top: 10px;
    display: block;
    color: #e44e42;
    font-weight: 600;
  }
</style>
