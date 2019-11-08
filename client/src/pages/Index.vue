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
      <!-- <section class="section section--red next-event" id="coming-soon">
        <div class="container grid">
          <div class="grid-1of2 grid-1of1--tablet-large">
            <h2>Coming Soon</h2>
          </div>
          <div class="grid-1of2 grid-1of1--tablet-large">
            <div class="next-event__container">
              <div class="next-event__card card">
                <header class="next-event__header">
                  <g-image></g-image>
                </header>
                <div class="next-event__content">
                  <span class="next-event__title">Preview Night</span>
                  <span class="next-event__date">11/9 @ 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <section class="section section--yellow about" id="about">
        <div class="grid container">
          <div class="grid-1of1">
            <div class="about__content">
              <h2>About Us</h2>
              <p>Marquee Trivia is held once a month in the greater Boston area. Each month brings a different theme for the night
                with questions that orbit around that theme and prizes that are for sure definitely 100% totally at best tangentially
                related to the theme for the night.
                For more information and to stay up-to-date with each month's event sign up for our newsletter.</p>
              <p class="about__signoff">See you at trivia!</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--red sponsors" id="sponsors">
        <div class="container grid">
          <div class="grid-1of1">
            <h2>Community Partners</h2>
          </div>
          <div class="grid-1of3">
            <div class="sponsors__sponsor">
              <a
              href="https://iffboston.org"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/IFFBostonLogo.png"/>
              </a>
            </div>
          </div>
          <div class="grid-1of3">
            <div class="sponsors__sponsor">
              <a
              href="https://coolidge.org"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/CoolidgeLogo.png"/>
              </a>
            </div>
          </div>
          <div class="grid-1of3">
            <div class="sponsors__sponsor">
              <a
              href="http://web.emerson.edu/brightlights/"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/BrightLightsWhite.png"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="section signup" id="sign-up">
        <div class="container grid">
          <div class="grid-1of1">
            <h2>Keep Up To Date</h2>
            <p>We usually send two emails per month: an announcement of that month's event and a reminder closer to it.</p>
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
