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
      projects: [],
      currPageNumber: 1,
      maxNumberOfPages: -1
    }
  },

  methods: {
    fetchProjects() {
      axios
        .get(`${this.BASE_URL}/projects`, {
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
      <div class="page-numbers">
        <div 
          class="page-number" 
          :class="{ 'active-page': currPageNumber === n }"
          @click="changePage(n)" 
          v-for="n in maxNumberOfPages" 
          :key="n">
          {{ n }}
        </div>
      </div>
      <div class="projects__inner">

        <!-- card dei progetti -->
        <ProjectCard :project="project" v-for="project in projects" :key="project.id" />

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
      background-color: rgba($orange, $alpha: 0.8);
      color: $white;
      border-radius: 10px;
    }
    .main-title {
      font-size: 2.4rem;
      text-align: center;
      margin-bottom: 50px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    &__inner {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 40px;
    }
  }

  .active-page {
    color: $black;
  }

</style>