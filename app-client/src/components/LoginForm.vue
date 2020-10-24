<template>
  <div class="container d-flex justify-content-center">
      <form @submit.prevent="submitForm" class="form">
        <div class="input-group mb-3">
          <input type="text" id="username" class="form-control" placeholder="Recipient's username" v-model="username"
          @focusout="isPopup">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
          <!--<p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>-->
        </div>

        <div class="input-group mb-3">
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="password">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">validation+</span>
          </div>
        </div>
        <button class="btn btn-primary btn-lg btn-block"
          :disabled="!isUsernameValid || !password"
          type="submit"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          Sign in
        </button>
      </form>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
      counter:0,
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
      } catch (error) {
          console.log(error);
       // console.log(error.response.data);
        //this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
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
    },
  },
};
</script>
