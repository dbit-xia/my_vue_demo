<template>
  <div class="home">
    <Test02 msg="from Home"/>
    <TestSvelte msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestSvelte from '@/components/TestSvelte.vue'
import Test02 from "@/components/Test02";
export default {
  name: 'Home',
  components: {
    TestSvelte,
    Test02
  }
}
</script>
