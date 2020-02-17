<template>
  <div class="layout">
    <header class="header" id="site-header">
      <div class="container grid">
        <div class="logo-container grid-1of1">
          <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
        </div>
        <nav class="nav grid-1of1">
          <ul class="menu">
            <li class="menu__item">
              <a href="/about" class="menu__link">About</a>
            </li>
            <li class="menu__item">
              <a href="/events" class="menu__link">Events</a>
            </li>
            <li class="menu__item">
              <a href="/contact" class="menu__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <article class="content">
      <slot/>
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
    </article>
    <footer id="site-footer">
      <div class="container">
        <div class="social-links-container">
          <nav class="social-links">
            <ul class="social-links__menu">
              <li class="social-links__cta">
                Follow Us:
              </li>
              <li class="social-links__link">
                <a href="https://www.facebook.com/marqueetrivia/" rel="noopenner" target="_blank">Facebook</a>
              </li>
              <li class="social-links__link">
                <a href="https://twitter.com/MarqueeTrivia" rel="noopenner" target="_blank">Twitter</a>
              </li>
              <li class="social-links__link">
                <a href="https://www.instagram.com/marqueetrivia" rel="noopenner" target="_blank">Instagram</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="copyright">
          &copy;{{new Date().getFullYear()}} Marquee Trivia
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MailchimpSignUp from "../components/MailChimp.vue";

export default {
  components: {
    MailchimpSignUp,
  },
}
</script>