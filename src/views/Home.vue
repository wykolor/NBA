<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>我是less语言测试</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="less" scoped>
.home {
  h1 {
    color: blue;
  }
}
</style>
