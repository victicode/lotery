<script setup>
import banner1 from '@/assets/img/banner1.png';
import banner2 from '@/assets/img/banner2.png';
const banners = [
  banner1,
  banner2
]
</script>
<template>
  <section class="flex justify-center md:px-36 px-4 mt-8">
    <div class="md:mx-12 mx-0 box-banner md:py-0 md:mt-0 mt-5 md:pt-5 py-5" v-for="(n, i) in banners" :key="i">
      <img :src="n" alt="" class="w-full">
    </div>
  </section>
</template>
