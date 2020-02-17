<template>
  <Layout>
    <div class="about-page">
      <header class="page-hero">
        <div class="grid">
          <div class="grid-1of3 grid-1of1--tablet-large">
            <div class="page-hero__title section section--red">
              <h1>About Us</h1>
            </div>
          </div>
          <div class="grid-2of3 grid-1of1--tablet-large">
            <div class="page-hero__image">
              <g-image src="~/assets/about/AboutHero.jpg"
              class="hero__img"/>
            </div>
          </div>
        </div>
      </header>
      <main class="page-content">
        <section class="section">
          <div class="container">
            <div
            v-html="$page.wordPressPage.content"/>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="bios">
              <h2>About The Hosts</h2>
              <div class="bios__bio grid">
                <div class="grid-1of5 grid-1of1--tablet-large">
                  <div class="bios__img-ctr">
                    <g-image src="~/assets/about/JamesProfile.jpg"
                    class="bios__img"/>
                  </div>
                </div>
                <div class="grid-4of5 grid-1of1--tablet-large">
                  <div
                  class="bio">
                    <div
                    v-html="$page.wordPressPage.acf.bios.jamesBio"/>
                  </div>
                </div>
              </div>
              <div class="bios__bio grid">
                <div class="grid-1of5 grid-1of1--tablet-large">
                  <div class="bios__img-ctr">
                    <g-image src="~/assets/about/WesleyProfile.jpg"
                    class="bios__img"/>
                  </div>
                </div>
                <div class="grid-4of5 grid-1of1--tablet-large">
                  <div
                  class="bio">
                    <div
                    v-html="$page.wordPressPage.acf.bios.wesleyBio"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </Layout>
</template>

<page-query>
  query aboutUs {
    wordPressPage(id: 26) {
      content
      title
      acf {
        bios {
          jamesBio
          wesleyBio
        }
      }
    }
  }
</page-query>

<style lang="scss">
  @import "@/styles/pages/about.scss";
</style>

<script>
export default {
  name: 'AboutPage',
}
</script>