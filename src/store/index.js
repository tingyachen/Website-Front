import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: null
  },
  mutations: {
    getVoices (state) {
      state.msg = new SpeechSynthesisUtterance()
      getVoices().then((voices) => {
        const VT = voices.filter(v => v.lang.includes('ja-JP'))[0]
        state.msg.voice = VT
      })
    }
  },
  actions: {},
  modules: {
    user
  },
  plugins: [createPersistedState({
    key: 'shop',
    paths: ['user.token']
  })]
})

function getVoices () {
  return new Promise(
    function (resolve, reject) {
      const synth = window.speechSynthesis

      const id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          resolve(synth.getVoices())
          clearInterval(id)
        }
      }, 10)
    }
  )
}
