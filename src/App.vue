<template>
  <div class="app">
    <div class="box1"><img src="./assets/sponser1.png" /></div>
    <div class="box2"><img src="./assets/cscontact.png" /></div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="css" scoped>
.box1 {
  position: fixed;
  top: 45%;
  left: 0.5%;
  z-index: 9;
}

.box2 {
  position: fixed;
  top: 45%;
  right: 0.5%;
  z-index: 9;
}
</style>
