<script setup>
import img1 from '@/assets/img/bdv.webp'
import img2 from '@/assets/img/zelle.webp'
import img3 from '@/assets/img/bnc.webp'
const methods = [
  img1,
  img2,
  img3
]

</script>
<template>
  <section class="mt-24">
    <div class="text-center text-gray-700 step_pay--title text-4xl">Aceptamos diversos metodos de pago</div>
    <div class="flex justify-center mt-5">
      <img :src="img" alt="" v-for="(img, key) in methods" :key="key">
    </div>
  </section>
</template>