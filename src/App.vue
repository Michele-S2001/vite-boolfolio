<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },

  data() {
    return {
      page: 'App.vue'
    }
  }
}
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/global.scss';
</style>
