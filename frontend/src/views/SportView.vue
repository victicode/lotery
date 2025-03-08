<script setup>
import { useSportStore } from '@/services/stores/sport';
import { ref, onMounted } from 'vue'
import axios from "axios";
const sportStore = useSportStore()
onMounted(() => {
  sportStore.getSport()
  // axios.get('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard', {
  //     proxy: {
  //         host: '18.134.236.231',
  //         port: 3128,
  //         protocol: 'http',
  //     },
  //   })
  //   .then((response) => {
  //       // log the response data
  //       console.log(response.data);
  //   })
  //   .catch((error) => {
  //       // log request error if any
  //       console.error('Error:', error);
  //   });
})
</script>
<template>
  <section class="md:text-4xl text-2xl text-center text__section-title md:mt-30 mt-28 px-5">
    Resultados deportivos
  </section>
</template>