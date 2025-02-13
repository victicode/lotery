<script setup>
</script>
<template>
  <section class="md:text-4xl text-2xl text-center text__section-title md:mt-30 mt-28 px-5">
    Resultados de todas las loterias
  </section>
  <div class="lotery-section">
    <section class=" mt-6 md:px-36 px-2 mx-auto result__container">
      <iframe :src="'https://www.tuazar.com/loteria/resultados'" allow="fullscreen" frameborder="0"
        class="w-full h-full" style="transform: translateY(-30rem);"></iframe>
    </section>
  </div>
</template>
<style>
.lotery-section {
  height: 650vh;
  overflow: hidden;
}

@media screen and (max-width: 680px) and (max-height: 740px) {
  .lotery-section {
    height: 1370vh;
    overflow: hidden;
  }
}

@media screen and (max-width: 680px) and (min-height: 741px) and (max-height: 915px) {
  .lotery-section {
    height: 1200vh;
    overflow: hidden;
  }
}
</style>