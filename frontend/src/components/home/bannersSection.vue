<script setup>
  import banner1 from '@/assets/img/banner1.png';
  import banner2 from '@/assets/img/banner2.png';
  const banners = [
    banner1,
    banner2
  ]
</script>
<template>
  <section class="flex justify-center px-36  mt-10" >
    <div class="mx-12 box-banner pt-5" v-for="(n,i) in banners" :key="i">
      <img :src="n" alt="">
    </div>
  </section>
</template>