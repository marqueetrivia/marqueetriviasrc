<template>
  <Layout>
    <main class="home">
      <header class="hero">
        <div class="overlay">
          <div class="container">
            <div class="overlay__content">
              <h1>Boston's First Trivia Night For Film Lovers</h1>
              <p>took us long enough...</p>
            </div>
          </div>
        </div>
        <g-image src="~/assets/home/homeHero.jpeg"
        class="hero__img"/>
      </header>
      <section class="section">
        <div class="container grid">
          <div class="grid-1of2">
            <h2>Coming Soon</h2>
          </div>
          <div class="grid-1of2">
            <g-link class="next-event-container">
              <div class="next-event card">
                <header class="next-event__header">
                  <g-image></g-image>
                </header>
                <div class="next-event__content">
                  <span class="next-event__title">Preview Night</span>
                  <span class="next-event__date">11/9 @ 5pm</span>
                </div>
              </div>
            </g-link>

          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<style lang="scss">
  @import "@/styles/pages/home.scss";
</style>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
