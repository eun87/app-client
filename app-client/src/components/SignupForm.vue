<template>
  <div class="container d-flex justify-content-center">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div class="input-group mb-3">
          <input type="text" id="username" class="form-control" placeholder="Recipient's username" v-model="username"
          @focusout="isPopup">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="password">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">validation+</span>
          </div>
        </div>  
        <div class="input-group mb-3">
          <input type="text" id="nickname" class="form-control" placeholder="Nickname" v-model="nickname">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">validation+</span>
          </div>
        </div> 
        <button class="btn btn-primary btn-lg btn-block">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      //this.logMessage = `${data.username} 님이 가입되었습니다`;
      this.initForm();
    },
    toast(toaster, append = false, variant, str) {
        this.counter++
        this.$bvToast.toast(`${str}`, {
          title: `Warning -`,
          toaster: toaster,
          solid: true,
          appendToast: append,
          variant: variant,
          //auto-hide-delay: 1000
        })
    },
    isPopup(){
      if(!validateEmail(this.username) && this.username){
        this.$bvToast.hide();
        this.toast('b-toaster-bottom-center', true, 'danger', 'Please enter an email address');
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>