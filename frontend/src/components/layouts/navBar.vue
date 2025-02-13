<script setup>
const navbarItems = [
  {
    title: 'Inicio',
    icon: 'o_apps',
    path: '/'
  },
  {
    title: 'Loterias',
    icon: 'o_casino',
    path: '/lotery-result'
  },
  {
    title: 'Animalitos',
    icon: 'o_cruelty_free',
    path: '/animalitos-result'
  },
  {
    title: 'Deportes',
    icon: 'o_scoreboard',
    path: '/sport-result'
  },
  {
    title: 'Rifas',
    icon: 'o_confirmation_number',
    path: '/rifas-result'
  },

]
</script>
<template>
  <q-tabs id="tab-bar" inline-label class="bg-primary text-white shadow-2 fixed w-full py-3 tab_nav__content"
    style="bottom: 0rem;">
    <q-route-tab :to="item.path" exact class="q-px-xs tab_nav" v-for="(item, key) in navbarItems" :key="key">
      <div class="icon__content">
        <q-icon :name="item.icon" size="md" />
      </div>
      <span class="mt-1">{{ item.title }}</span>
    </q-route-tab>
  </q-tabs>
</template>
<style lang="scss">
#tab-bar {
  display: none;
  // overflow: hidden;
  // height: 10vh;

  z-index: 100;
}

.tab_nav__content {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

}

.q-router-link--active {

  & .icon__content {
    background: rgb(255, 255, 255);

    & i {
      color: $primary;
    }
  }
}

.tab_nav {
  & .q-focus-helper {
    display: none;
  }

  & .icon__content {
    transition: all 0.5s ease;
    padding: 0.2rem 1rem;
    width: 100%;
    border-radius: 5rem;

  }

  & .q-tab__indicator {
    display: none;
  }

  & .q-tab__content {
    flex-direction: column;
    width: 100%;
  }

  & .q-tab__content>span {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 680px) {

  #tab-bar {
    display: block;
  }
}
</style>