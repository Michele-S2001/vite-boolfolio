<script>
export default {
  
}
</script>

<template>
  <header class="page-header">
    <div class="container">
      <ul class="nav-links">
        <li>
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'projects.index' }" class="nav-link">My works</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
  .page-header {
    box-shadow: 0px 4px 16px rgba($black, $alpha: 0.5);
    padding: 20px 10px;
    text-transform: capitalize;

    .nav-links {
      display: flex;
      gap: 20px;
      *.nav-link {
        line-height: 30px;
      }
    }
  }
</style>