<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Test02 msg="App.Test02.msg3"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Test02 from "@/components/Test02";
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Test02
  }
}
</script>
