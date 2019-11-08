<template>
  <div class="layout">
    <header class="header" id="site-header">
      <div class="container grid">
        <div class="logo-container grid-1of1">
          <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
        </div>
        <!-- <nav class="nav grid-1of3 grid-1of1--tablet-large">
          <ul class="menu">
            <li class="menu__item">
              <a href="#coming-soon" class="menu__link">Coming Soon</a>
            </li>
            <li class="menu__item">
              <a href="#about" class="menu__link">About</a>
            </li>
            <li class="menu__item">
              <a href="#sign-up" class="menu__link">Sign Up</a>
            </li>
          </ul>
        </nav> -->
      </div>
    </header>
    <article class="content">
      <slot/>
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