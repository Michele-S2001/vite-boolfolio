<script>
  import store from '../../store';
  import axios from 'axios';

  export default {
    data() {
      return {
        project: null
      }
    },

    methods: {
      fetchProject() {
        axios
          .get(`${store.BASE_URL}/projects/${this.$route.params.slug}`)
          .then((res) => {
            this.project = res.data.project;
          })
      }
    },

    created() {
      this.fetchProject();
      console.log(this);
    }
  }
</script>

<template>
  <div v-if="project" class="project-details">
    <div class="container">
      <div class="project-details__inner">
        <h1 class="title">{{ project.title }}</h1>
        <!-- <span>{{ project }}</span> -->
        <ul class="technologies">
          <li v-for="tech in project.technologies">
            {{ tech.slug }}
          </li>
        </ul>
        <strong class="type">{{ project.type.name }}</strong>
        <p class="description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .project-details {
    padding-top: 50px;

    &__inner {
      .title {
        margin-bottom: 30px;
      }
      .technologies {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }

      .description {
        padding: 50px 0;
      }
    }
  }

</style>