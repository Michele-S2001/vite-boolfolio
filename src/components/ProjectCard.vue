<script>

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}

</script>

<template>

  <div class="card card-project">
    <div class="card-project__header">
      <p class="title">{{ project.title }}</p>
    </div>
    <div class="card-project__body">
      <div class="type">
        <span class="tag type__name">{{ project.type.name }}</span>
      </div>
    </div>
    <div class="card-project__footer">
      <div class="info">
        <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}">More</router-link>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
  .card-project {
    box-shadow: 1px 4px 15px 0px #000000;
    background: linear-gradient(45deg, $darkerBlue 17%, hsla(211, 33%, 35%, 1) 100%);
    color: $darkerBlue;
    border-radius: 4px;
    padding: 20px 0;
    user-select: none;

    &:hover {
      .info {
        opacity: 1;
      }
    }

    &__header {
      margin-bottom: 20px;
      .title {
        background: linear-gradient(45deg, $gold-1 14%, $gold-2 100%);
        text-transform: capitalize;
        padding: 0 10px;
        line-height: 30px;
      }
    }

    &__body {
      margin-bottom: 20px;
      .type {
        text-align: center;
        .tag {
          display: inline-block;
          border: 3px solid $grey;
          line-height: 30px;
          padding: 0 10px;
          border-radius: 20px;
          &.type__name {
            background-color: rgba($gold-1, $alpha: 0.3);
            border: 3px solid $gold-2;
            color: $gold-2;
          }
        }
      }
    }

    &__footer {
      .info {
        text-align: center;
        color: $gold-2;
        font-weight: 700;
        opacity: 0;
        transition: 0.2s ease-in-out;
      }
    }
  }

</style>