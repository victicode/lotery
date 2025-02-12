<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <section class="flex w-full justify-center" style="transform: translateY(-2rem);">
    <RouterLink to="/lotery-result">
      <div class="link_result--box p-6 mx-5 bg-blue-800" >
        <div>
          Resultados Loteria
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/sport-result">
      <div class="link_result--box p-6 mx-5 bg-blue-800" >
          <div>
            Resultados deportes
          </div>
        </div>
    </RouterLink>
    <RouterLink to="/rifas-result">
      <div class="link_result--box p-6 mx-5 bg-blue-800" >
        <div>
          Resultados Rifas
        </div>
      </div>
    </RouterLink>
  </section>

</template>