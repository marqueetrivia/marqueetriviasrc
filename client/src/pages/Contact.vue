<template>
  <Layout>
    <main class="contact">
      <section class="section contact__content">
        <div class="container">
          <h1>Contact Us</h1>
          <p>For questions, concerns, or ideas please email <a href="mailto:info@marqueetrivia.com">info@marqueetrivia.com</a></p>
        </div>
      </section>
    </main>
  </Layout>
</template>

<style lang="scss">
  @import "@/styles/pages/contact.scss";
</style>

<script>
export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        property: "og:title",
        content: "Marquee Trivia Contact",
      },
      {
        property: "og:description",
        content: "Boston’s first trivia night for film lovers. Every month we dive into movie marginalia, Oscars history, box office stats, and more!",
      },
      {
        property: "og:url",
        content: "https://www.marqueetrivia.com/contact",
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