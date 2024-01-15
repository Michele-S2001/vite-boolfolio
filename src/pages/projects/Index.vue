<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },

  data() {
    return {
      BASE_URL: 'http://127.0.0.1:8000/api',
      projects: []
    }
  },

  methods: {
    fetchProjects() {
      axios
        .get(`${this.BASE_URL}/projects`)
        .then((res)=> {
          this.projects = res.data.results;
        })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>

  <section class="projects section">
    <div class="container">
      <h1 class="main-title">Tutti i miei progetti</h1>
      <div class="projects__inner">

        <!-- card dei progetti -->
        <ProjectCard :project="project" v-for="project in projects" :key="project.id" />

      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>

  .projects {

    .main-title {
      font-size: 1.6rem;
      margin-bottom: 50px;
    }

    &__inner {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 40px;
    }
  }

</style>