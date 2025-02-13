<script setup>
</script>
<template>
  <section class="md:text-4xl text-2xl text-center text__section-title md:mt-30 mt-28 px-5">
    Resultados de todos los animalitos
  </section>
  <div class="lotery-section__animalito mt-6">
    <section class=" mt-6 md:px-36 px-2 mx-auto result__animalitos--container">
      <iframe :src="'https://www.tuazar.com/loteria/animalitos/resultados/'" allow="fullscreen" frameborder="0"
        class="w-full h-full" style=""></iframe>
    </section>
  </div>
</template>
<style lang="scss">
.lotery-section__animalito {
  height: 1925vh;
  overflow: hidden;

  & iframe {
    transform: translateY(-32rem);
  }
}

@media screen and (max-width: 680px) and (max-height: 740px) {
  .lotery-section__animalito {
    height: 3860vh;

    & iframe {
      transform: translateY(-23rem);
    }
  }
}

@media screen and (max-width: 680px) and (min-height: 741px) and (max-height: 800px) {
  .lotery-section__animalito {
    height: 3530vh;

    & iframe {
      transform: translateY(-23rem);
    }
  }
}

@media screen and (max-width: 680px) and (min-height: 801px) and (max-height: 915px) {
  .lotery-section__animalito {
    height: 3235vh;

    & iframe {
      transform: translateY(-23rem);
    }
  }
}
</style>
