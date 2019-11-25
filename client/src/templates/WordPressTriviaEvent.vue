<template>
  <Layout>
    <main class="trivia-event">
      <header class="trivia-event__header">
        <div class="grid">
          <div class="grid-1of3 grid-1of1--tablet-large section section--red">
            <div class="trivia-event__header__title">
              <h1>{{event.title}}</h1>
              <p
              v-if="event.acf"
              class="date">
                {{eventDate}}
              </p>
              <p
              v-if="event.acf"
              class="location">
                <a
                :href='`https://maps.google.com/?q=${event.acf.location.address}`'
                rel="no-openner"
                target="_blank"
                class="button">White Horse Tavern</a>
              </p>
            </div>
          </div>
          <div class="grid-2of3 grid-1of1--tablet-large">
            <div class="trivia-event__header__image background-image">
              <g-image src="~/assets/triviaevents/openingnight/openingnight-hero.png"/>
            </div>
          </div>
        </div>
      </header>
      <section class="section trivia-event__about">
        <div class="container">
          <h2>About The Night</h2>
          <div
          v-if="event.acf"
          class="tiviaevent__content"
          v-html="event.acf.description"/>
        </div>
      </section>
      <section class="section section--yellow trivia-event__rules">
        <div class="container">
          <h2>The Rules</h2>
          <ul class="rules">
            <li class="rules__rule">
              No phones during the round
            </li>
            <li class="rules__rule">
              Max team size of 6 players
            </li>
            <li class="rules__rule">
              Answer sheets will be collected at the end of each round
            </li>
            <li class="rules__rule">
              The answeres have been researched and are set ahead of time
            </li>
            <li class="rules__rule">
              Unless otherwise stated; voice work and cameos count for questions about actors
            </li>
            <li class="rules__rule">
              Unless otherwise stated; box office stats are not adjusted for inflation and are domestic
            </li>
            <li class="rules__rule">
              Unless otherwise stated; oscars round are regarding the release year of the film(s)
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    wordPressTriviaevent (path: $path) {
      title
      acf {
        dateTime
        description
        location {
          address
        }
      }
    }
  }
</page-query>

<style lang="scss">
  @import "@/styles/templates/triviaevent.scss";
</style>

<script>
export default {
  name: 'TriviaEvent',
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    this.event = this.$page.wordPressTriviaevent;
  },
  computed: {
    eventDate() {
      const eventDate = new Date(this.event.acf.dateTime);
      const eventTime = `${(eventDate.getHours() + 11) % 12 + 1}:${eventDate.getMinutes()}`;
      return `${eventDate.getMonth()}/${eventDate.getDate()}/${eventDate.getFullYear()} @${eventTime}pm`;
    },
  },
  metaInfo: {
    title: 'Event',
    meta: [
      {
        property: "og:title",
        content: "Marquee Trivia Opening Night",
      },
      {
        property: "og:description",
        content: "Boston’s first trivia night for film lovers. Every month we dive into movie marginalia, Oscars history, box office stats, and more!",
      },
      {
        property: "og:url",
        content: "https://www.marqueetrivia.com/events",
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
};
</script>
