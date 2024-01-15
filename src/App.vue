<script>
import ProjectIndex from './pages/projects/Index.vue';

export default {
  components: {
    ProjectIndex
  },

  data() {
    return {
      page: 'App.vue'
    }
  }
}
</script>

<template>
  <ProjectIndex/>
</template>

<style lang="scss">
@use './style/global.scss';
</style>
