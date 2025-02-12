<script setup>
  import headervue from '@/components/layouts/header.vue';
  import footerVue from '@/components/layouts/footer.vue';
  import whatsappFloat from '@/components/layouts/whatsappFloat.vue';
</script>
<template>
  <headervue/>
  <main>
    <RouterView />
    <whatsappFloat />
  </main>
  <footerVue />
</template>