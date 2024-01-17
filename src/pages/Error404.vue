<template>
  <div class="error">
    <div class="container">
      <div class="error__inner">
        <img src="/img/not-found.gif" alt="not found John Travolta gif">
        <h1>Pagina non trovata! ERROR:404</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .error__inner {
    padding: 40px 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    h1 { 
      font-size: clamp(26px, 3vw, 36px);
    }
  }
</style>