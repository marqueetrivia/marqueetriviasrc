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
              <p>Marquee Trivia was started in 2019 by Wesley Emblidge and James Macon,
                two staff members from Independent Film Festival Boston.</p>
              <p>Feeling a severe lack of challenging film trivia in the Boston area,
                we created this monthly trivia night to help bring the city’s film community closer together.
                Every month we dive into movie marginalia, Oscars history, box office stats,
                [insert uproariously funny, critically acclaimed, extremely relatable,
                and slightly spicy movie joke here], and more! Not to mention: fabulous film-related prizes for
                the winning team.</p>
              <p>For more information and to stay up-to-date with all our events,
                sign up for the newsletter and follow us on social media below!</p>
              <p class="about__signoff">See you at trivia!</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--red sponsors" id="sponsors">
        <div class="container grid">
          <div class="grid-1of1">
            <h2>Our Community Partners</h2>
            <p>We’re grateful to have support from these local film institutions:</p>
          </div>
          <div class="grid-1of4 grid-1of2--tablet-large">
            <div class="sponsors__sponsor">
              <a
              href="https://iffboston.org"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/IFFBostonLogo.png"/>
              </a>
            </div>
          </div>
          <div class="grid-1of4 grid-1of2--tablet-large">
            <div class="sponsors__sponsor">
              <a
              href="https://coolidge.org"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/CoolidgeLogo.png"/>
              </a>
            </div>
          </div>
          <div class="grid-1of4 grid-1of2--tablet-large">
            <div class="sponsors__sponsor">
              <a
              href="http://web.emerson.edu/brightlights/"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/BrightLightsWhite.png"/>
              </a>
            </div>
          </div>
          <div class="grid-1of4 grid-1of2--tablet-large">
            <div class="sponsors__sponsor">
              <a
              href="https://www.brattlefilm.org/"
              rel="noopenner"
              target="_blank">
                <g-image src="~/assets/sponsors/BrattleLogo.png"/>
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
    title: 'Home',
    meta: [
      {
        property: "og:title",
        content: "Marquee Trivia",
      },
      {
        property: "og:description",
        content: "Boston’s first trivia night for film lovers. Every month we dive into movie marginalia, Oscars history, box office stats, and more!",
      },
      {
        property: "og:url",
        content: "https://www.marqueetrivia.com",
      },
      {
        property: "og:image",
        content: "/assets/static/src/assets/home/homeHero.jpeg",
      },
      {
        property: "twitter:title",
        content: "Marquee Trivia",
      },
      {
        property: "twitter:description",
        content: "Boston’s first trivia night for film lovers. Every month we dive into movie marginalia, Oscars history, box office stats, and more!",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:image",
        content: "/assets/static/src/assets/home/homeHero.jpeg",
      }
    ],
  },
  components: {
    MailchimpSignUp
  },
}
</script>
