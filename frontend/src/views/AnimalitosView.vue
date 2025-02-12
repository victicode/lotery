<script setup>
</script>
<template>
  <section class="text-4xl text-center text__section-title mt-12 " style="height: 10%;">
    Resultados de todos los animalitos
  </section>
  <div style="height: 1925vh; overflow: hidden; border-radius: 100px;">
    <section class=" mt-6   px-36 mx-auto result__animalitos--container" >
      <iframe :src="'https://www.tuazar.com/loteria/animalitos/resultados/'" allow="fullscreen"    frameborder="0" class="w-full h-full" style="transform: translateY(-30rem);"></iframe>
    </section>
  </div>
</template>

