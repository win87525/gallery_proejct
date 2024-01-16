<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="../img/rotate/rotate1.png" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="../img/rotate/rotate2.png" alt="Sample 2">
      </SplideSlide>
    </Splide>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
  
  export default defineComponent({
    components: {
      Splide,
      SplideSlide,
    },
  });
  </script>
  