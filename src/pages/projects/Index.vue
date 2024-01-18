<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
import store from '../../store';

export default {
  components: {
    ProjectCard
  },

  data() {
    return {
      projects: null,
      currPageNumber: 1,
      maxNumberOfPages: -1
    }
  },

  methods: {
    fetchProjects() {
      axios
        .get(`${store.BASE_URL}/projects`, {
          params: {
            page: this.currPageNumber
          }
        })
        .then((res)=> {
          this.projects = res.data.results.data;
          this.maxNumberOfPages = res.data.results.last_page;
        })
    },

    changePage(index) {
      this.currPageNumber = index;
    }
  },

  watch: {
    currPageNumber() {
      this.projects = [];
      this.fetchProjects();
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

      <!-- menu di paginazione (molto semplice) -->
      <div v-if="projects" class="page-numbers">
        <div 
          class="page-number" 
          :class="{ 'active-page': currPageNumber === n }"
          @click="changePage(n)" 
          v-for="n in maxNumberOfPages" 
          :key="n">
          {{ n }}
        </div>
      </div>

      <!-- card dei progetti -->
      <div v-if="projects" class="projects__inner">
        <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
      </div>
      
      <!-- Loader per l'attesa della risposta dal server -->
      <div v-else class="loader">
        <img src="/img/Double-Ring-1s-200px.gif" alt="Loading">
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

  .projects {

    .page-numbers {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 30px;
      cursor: pointer;
      font-weight: 700;
      background: linear-gradient(90deg, $gold-1 10%, $gold-2 100%);
      color: $darkerBlue;
      border-radius: 10px;
    }
    .main-title {
      font-size: 2.4rem;
      text-align: center;
      margin-bottom: 50px;
    }

    &__inner {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }
  }

  .active-page {
    color: $white;
  }

  .loader {
    display: flex;
    justify-content: center;
    & img {
      max-width: 100px;
    }
  }

</style>