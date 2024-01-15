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
      <h4 class="title">{{ project.title }}</h4>
    </div>
    <div class="card-project__body">
      <div class="type">
        <span class="tag prefix">Type</span>&#8594;<span class="tag type__name">{{ project.type.name }}</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
  .card-project {
    box-shadow: 2px 7px 16px 0px rgba($grey, $alpha: 0.5);
    border-top: 4px solid $blue;
    border-radius: 4px;
    padding: 20px;

    &__header {
      margin-bottom: 20px;
      .title {
        text-transform: capitalize;
        padding-bottom: 1em;
        border-bottom: 5px solid rgba($grey, $alpha: 0.7);
      }
    }

    &__body {
      .type {
        text-align: center;
        .tag {
          display: inline-block;
          border: 3px solid $grey;
          line-height: 30px;
          padding: 0 10px;
          border-radius: 20px;

          &.prefix {
            background-color: rgba($ocean, $alpha: 0.3);
            border: 3px solid $ocean;
          }

          &.type__name {
            background-color: rgba($salmon, $alpha: 0.3);
            border: 3px solid $salmon;
          }
        }
      }
    }
  }

</style>