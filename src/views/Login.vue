<template>
  <div id="login">
    <div class="container">
      <div class="form-box" :style="{transform: activeBox}">
        <!-- 註冊-->
        <div class="register-box  hidden" ref="register">
            <h1>register</h1>
            <b-form @submit.prevent="register">
        <b-form-group label="帳號" label-for="input-account" description="帳號長度為 4 到 20 個字" :state="state.account" invalid-feedback="帳號格式不正確">
            <b-form-input v-model="signUpForm.account" required="required" placeholder="請輸入帳號" type="text" :state="state.account"></b-form-input>
        </b-form-group>
        <b-form-group label="密碼" label-for="input-password" description="密碼長度為 4 到 20 個字" :state="state.password" invalid-feedback="密碼格式不正確">
            <b-form-input v-model="signUpForm.password" required="required" placeholder="請輸入密碼" type="password" :state="state.password"></b-form-input>
        </b-form-group>
        <b-form-group label="信箱" label-for="input-email" description="請輸入有效的信箱" :state="state.email" invalid-feedback="信箱格式不正確">
            <b-form-input v-model="signUpForm.email" required="required" placeholder="請輸入信箱" type="text" :state="state.email"></b-form-input>
        </b-form-group>
        <div class="text-center">
            <b-btn variant="#b56bc2" type="submit">註冊</b-btn>
        </div>
        </b-form>
      </div>
      <!-- 登入 -->
      <div class="login-box" ref="login">
          <h1>login</h1>
          <b-form @submit.prevent="login">
      <b-form-group label="帳號" label-for="input-account" description="帳號長度為 4 到 20 個字" :state="state.account" invalid-feedback="帳號格式不正確">
          <b-form-input v-model="logInForm.account" required="required" placeholder="請輸入帳號" type="text" :state="state.account"></b-form-input>
      </b-form-group>
      <b-form-group label="密碼" label-for="input-password" description="密碼長度為 4 到 20 個字" :state="state.password" invalid-feedback="密碼格式不正確">
          <b-form-input v-model="logInForm.password" required="required" placeholder="請輸入密碼" type="password" :state="state.password"></b-form-input>
      </b-form-group>
      <div class="text-center">
          <b-btn variant="#b56bc2" type="submit">登入</b-btn>
      </div>
      </b-form>
                </div>
            </div>
            <div class="con-box left">
                <span>welcome</span><br>
                <p style="font-size:18px;">歡迎加入，一起輕鬆學日語</p>
                <img src="../assets/img/welcome2.gif">
                <p>已有帳號</p>
                <button id="login" @click="goToLogin" v-bind:class="{active: moveLeft}">去登入</button>
            </div>
            <div class="con-box right">
                <span>welcome</span><br>
                <p style="font-size:18px;">歡迎回來，一起輕鬆學日語</p>
                <img src="../assets/img/welcome1.gif">
                <p>沒有帳號？</p>
                <button id="register" @click="goToRegister" v-bind:class="{active: moveRight}">去註冊</button>
            </div>
        </div>
  </div>
</template>

<script>
import validator from 'validator'
export default ({
  name: 'app',
  data () {
    return {
      logInForm: {
        account: '',
        password: ''
      },
      signUpForm: {
        account: '',
        password: '',
        email: ''
      },
      moveRight: false,
      moveLeft: false,
      activeBox: false
    }
  },
  computed: {
    state () {
      return {
        account: this.signUpForm.account.length === 0 ? null : this.signUpForm.account.length >= 4 && this.signUpForm.account.length <= 20,
        password: this.signUpForm.password.length === 0 ? null : this.signUpForm.password.length >= 4 && this.signUpForm.password.length <= 20,
        email: this.signUpForm.email.length === 0 ? null : validator.isEmail(this.signUpForm.email),
        loginAccount: this.logInForm.account.length === 0 ? null : this.logInForm.account.length >= 4 && this.logInForm.account.length <= 20,
        loginPassword: this.logInForm.password.length === 0 ? null : this.logInForm.password.length >= 4 && this.logInForm.password.length <= 20
      }
    }
  },
  methods: {
    goToRegister () {
      const login = this.$refs.login
      const register = this.$refs.register
      this.activeBox = 'translateX(85%)'
      this.moveRight = !this.moveRight
      login.classList.add('hidden')
      register.classList.remove('hidden')
    },
    goToLogin () {
      const login = this.$refs.login
      const register = this.$refs.register
      this.activeBox = 'translateX(0%)'
      this.moveLeft = !this.moveLeft
      login.classList.remove('hidden')
      register.classList.add('hidden')
    },
    async login () {
      try {
        const { data } = await this.api.post('/users/login', this.logInForm)
        this.$store.commit('user/login', data.result)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async register () {
      try {
        await this.api.post('/users', this.signUpForm)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
})
</script>
<style>
        #login .container {
            background-color: #fff;
            width: 1150px;
            height: 715px;
            border-radius: 5px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .form-box {
            position: absolute;
            top: -5%;
            left: 12%;
            background-color: #e0c1e6;
            width: 480px;
            height: 800px;
            border-radius: 5px;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            /* 動畫 加速後減速 */
            transition: 0.5s ease-in-out;
        }

        .register-box,
        .login-box {
            /* 彈性盒 垂直排列 */
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .hidden {
            display: none !important;
            transition: 0.5s;
        }

        .show {
            display: block !important;
            transition: 0.5s;
        }

        .register-box h1,
        .login-box h1 {
            text-align: center;
            margin-bottom: 25px;
            text-transform: uppercase;
            color: #fff;
            letter-spacing: 5px;
        }

        input {
            background-color: transparent;
            width: 70%;
            color: #fff;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.4);
            padding: 10px 0;
            text-indent: 10px;
            margin: 8px 0;
            font-size: 16px;
            letter-spacing: 2px;
        }

        input::placeholder {
            color: #fff;
        }

        input:focus {
            color: #a262ad;
            outline: none;
            border-bottom: 1px solid #a262ad80;
            transition: 0.5s;
        }

        input:focus::placeholder {
            opacity: 0;
        }

        .form-box button {
            width: 70%;
            margin-top: 35px;
            background-color: #f6f6f6;
            outline: none;
            border-radius: 8px;
            padding: 13px;
            color: #b56bc2;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }

        .form-box button:hover {
            background-color: #dd97e9;
            color: #f6f6f6;
            transition: background-color 0.5s ease;
        }

        .con-box {
            width: 50%;
            /* 彈性盒 垂直排列 居中 */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* 絕對定位 居中 */
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        .con-box.left {
            left: -2%;
        }

        .con-box.right {
            right: -2%;
        }

        .con-box h2 {
            color: #8e9aaf;
            font-size: 25px;
            font-weight: bold;
            letter-spacing: 3px;
            text-align: center;
            margin-bottom: 4px;
        }

        .con-box p {
            font-size: 12px;
            letter-spacing: 2px;
            color: #8e9aaf;
            text-align: center;
        }

        .con-box span {
            text-transform: uppercase;
            letter-spacing: 5px;
            font-size: 30px;
            font-weight: 600;
            color: #c198c8;
        }

        .con-box img {
            width: 250px;
            height: 250px;
            opacity: 0.9;
            margin: 40px 0;
        }

        .con-box button {
            margin-top: 3%;
            background-color: #fff;
            color: #a262ad;
            border: 1px solid #d3b7d8;
            padding: 6px 10px;
            border-radius: 5px;
            letter-spacing: 1px;
            outline: none;
            cursor: pointer;
        }

        .con-box button:hover {
            background-color: #d3b7d8;
            color: #fff;
        }
</style>
