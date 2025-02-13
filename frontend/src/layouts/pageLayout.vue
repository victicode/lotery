<script setup>
import headervue from '@/components/layouts/header.vue';
import footerVue from '@/components/layouts/footer.vue';
import whatsappFloat from '@/components/layouts/whatsappFloat.vue';
import navBarVue from '@/components/layouts/navBar.vue';

</script>
<template>
  <headervue />
  <main class="mt-20">
    <RouterView />
    <whatsappFloat />
  </main>
  <navBarVue />
  <footerVue />
</template>