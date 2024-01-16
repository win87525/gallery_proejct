<template>
  <header>
    <navBar></navBar>
  </header>
  <RouterView>
  </RouterView>
  <footerBox></footerBox>
</template>

<script setup>
import navBar from './components/navBar.vue';
import footerBox from './components/footerBox.vue';
// import HomePage from './page/HomePage.vue';
// import PainterPage from './page/PainterPage.vue';
</script>

<style scoped></style>