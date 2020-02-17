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
        <g-image src="~/assets/home/Hero2020.jpg"
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
                and slightly spicy movie joke here], and more! Not to mention: we have fabulous film-related prizes for
                the winning team.</p>
              <p>For more information and to stay up-to-date with all our events,
                sign up for the newsletter and follow us on social media below!</p>
              <p class="about__signoff">See you at trivia!</p>
            </div>
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
  data() {
    return {};
  },
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
}
</script>
