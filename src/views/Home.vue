<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginDataForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginDataForm from '@/components/Login/LoginDataForm.vue'
export default {
  name: 'Home',
  components: {
    LoginDataForm
  }
}
</script>
