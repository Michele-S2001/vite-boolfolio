<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="introduction">
          <h1 class="greeting">Hi! I'm Michele Serafini</h1>
          <p class="job">Full-stack web developer</p>
          <p class="bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis beatae consectetur accusamus ut repellat voluptatibus, illum assumenda? Blanditiis, magnam distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas qui explicabo voluptatem nisi nesciunt incidunt eos quasi! Maxime facere voluptate illo laborum! Veritatis sapiente quae modi doloremque commodi harum voluptatem.</p>
        </div>
        <div class="image">
          <img src="/img/Profilo-removebg.png" alt="Profile image">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

  .hero {
    padding: 20px 10px;

    &__inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .image {
        clip-path: ellipse(43% 45% at 50% 49%);
      }

      .introduction {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        .greeting {
          font-size: 48px;
        }

        .job {
          font-size: 21px;
        }

        .bio {
          word-spacing: 5px;
        }

      }
    }
  }

</style>