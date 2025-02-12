<script setup>
import { RouterLink, RouterView } from 'vue-router'
import loterySection from '@/components/home/results/loterySection.vue';
import animalitosSection from '@/components/home/results/animalitosSection.vue'
import rifasSection from '@/components/home/results/rifasSection.vue';
import sportSection from '@/components/home/results/sportSection.vue';

</script>
<template>
  <section class="px-36 mx-12 mt-12">
    <loterySection />
    <animalitosSection />
    <rifasSection />
    <sportSection />
  </section>
</template>