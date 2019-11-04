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
      <section class="section section--red">
        <div class="container grid">
          <div class="grid-1of2">
            <h2>Coming Soon</h2>
          </div>
          <div class="grid-1of2">
            <g-link class="next-event-container">
              <div class="next-event card">
                <header class="next-event__header">
                  <!-- <g-image></g-image> -->
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
      <section class="section section--yellow about">
        <div class="grid">
          <div class="grid-1of3">
            <g-image src="~/assets/home/about.jpg"/>
            <div class="overlay overlay--gradient overlay--gradient--right"/>
          </div>
          <div class="grid-2of3">
            <div class="about__content content--right">
              <h2>About Us</h2>
              <p>Marquee Trivia was started by Wesley Emblidge and James Macon
                (pictured in the very much not staged photo to the right) in 2019. We felt a severe lack of
                hardcore film trivia in the Boston area which is, as you know, the mark of a world class city.
                In response Marquee Trivia was created.</p>
              <p>Marquee Trivia is held once a month in the greater Boston area. Each month brings a different theme for the night
                with questions that orbit around that theme and prizes that are for sure definitely 100% totally at best tangentially
                related to the theme for the night.</p>
              <p>For more information and to stay up-to-date with each month's event sign up for our newsletter!</p>
              <p class="about__signoff">See you at trivia!</p>
              <p class="about__authors">Wesley &amp; James</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container grid">
          <div class="grid-1of2">
            <h2>Keep Up To Date</h2>
          </div>
          <div class="grid-1of2">
            <MailchimpSignUp/>
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
import MailchimpSignUp from "../components/MailChimp.vue";
export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    MailchimpSignUp
  },
}
</script>
