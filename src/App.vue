<template>
  <div id="app" class="container mx-auto py-6">
    <master-form/>
  </div>
</template>

<script>
import MasterForm from './components/MasterForm.vue';

export default {
  name: "App",
  components: {MasterForm},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
