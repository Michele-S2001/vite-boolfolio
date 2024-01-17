<script>
  import store from '../../store';
  import axios from 'axios';

  export default {
    props: {
      slug: String
    },

    data() {
      return {
        project: null
      }
    },

    methods: {
      fetchProject() {
        axios
          .get(`${store.BASE_URL}/projects/${this.slug}`)
          .then((res) => {
            this.project = res.data.project;
          })
          .catch((error) => {
            if (error.response.status === 404) {
              this.$router.push({ name: 'not-found' });
            }
          })
      }
    },

    created() {
      this.fetchProject();
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
        &::first-letter {
          text-transform: uppercase;
        }
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