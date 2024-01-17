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
          <li v-for="tech in project.technologies" :key="tech.id" class="technology">
            {{ tech.slug }}
          </li>
        </ul>
        <div class="type">{{ project.type.name }}</div>
        <p class="description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

  .project-details {
    padding: 50px 20px;

    &__inner {
      .title {
        margin-bottom: 30px;
        font-size: clamp(30px, 5vw, 40px);
        letter-spacing: 5px;
        &::first-letter {
          text-transform: uppercase;
        }
      }
      .technologies {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 20px;

        .technology {
          @include badge($orange, $black);
        }
      }

      .type {
        display: inline-block;
        @include badge($darkBlue, $white);
      }

      .description {
        padding: 50px 0;
        font-size: 20px;
      }
    }
  }

</style>