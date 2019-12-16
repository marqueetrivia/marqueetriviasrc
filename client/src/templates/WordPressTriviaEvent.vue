<template>
  <Layout>
    <main class="trivia-event">
      <header class="trivia-event__header">
        <div class="grid">
          <div class="grid-1of3 grid-1of1--notebook-large section section--red">
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
                target="_blank">
                  <font-awesome-icon :icon="['fas', 'map-marked-alt']"/>
                  White Horse Tavern
                </a>
              </p>
            </div>
            <div
            v-if="event.acf"
            class="trivia-event__header__ctas">
              <a
              :href="event.acf.googleCalendarLink"
              class="button"
              target="_blank"
              rel="noopenner">Add To Google Calendar</a>
              <g-link
              :to="`/triviaevents/ical/${event.acf.icalAsset}`"
              class="button">Add To iCal</g-link>
            </div>
          </div>
          <div class="grid-2of3 grid-1of1--notebook-large">
            <div
            v-if="event.acf"
            class="trivia-event__header__image background-image"
            :style="{backgroundImage: `url(/triviaevents${event.acf.photoAsset})`}">
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
              No phones during the rounds (no cheating!)
            </li>
            <li class="rules__rule">
              Teams are limited to groups of six (teams larger than that are not eligible to win prizes, but can still play!)
            </li>
            <li class="rules__rule">
              Answer sheets will be collected at the end of each round
            </li>
            <li class="rules__rule">
              The answers have been researched and are set ahead of time
            </li>
            <li class="rules__rule">
              Unless otherwise stated; voice work and cameos count for questions about actors
            </li>
            <li class="rules__rule">
              Unless otherwise stated; box office stats are not adjusted for inflation and are domestic
            </li>
            <li class="rules__rule">
              Unless otherwise stated; Oscars round are regarding the release year of the film(s)
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
        googleCalendarLink
        icalAsset
        photoAsset (width: 1000, height: 400)
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
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const eventDate = new Date(this.event.acf.dateTime.replace(/\-/g, '/'));
      const eventTime = `${(eventDate.getHours() + 11) % 12 + 1}:${eventDate.getMinutes()}`;
      return `${days[eventDate.getDay()]}, ${months[eventDate.getMonth()]} ${eventDate.getDate()} at ${eventTime}pm`;
    },
  },
  metaInfo() {
    return {
      title: this.$page.wordPressTriviaevent.title,
      meta: [
        {
          property: "og:title",
          content: `Marquee Trivia - ${this.$page.wordPressTriviaevent.title}`,
        },
        {
          property: "og:description",
          content: "Boston’s first trivia night for film lovers. Every month we dive into movie marginalia, Oscars history, box office stats, and more!",
        },
        {
          property: "og:url",
          content: `https://www.marqueetrivia.com${this.$route.path}`,
        },
        {
          property: "og:image",
          content: `https://www.marqueetrivia.com/triviaevents${this.$page.wordPressTriviaevent.acf.photoAsset}`,
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
          content: `https://www.marqueetrivia.com/triviaevents${this.$page.wordPressTriviaevent.acf.photoAsset}`,
        }
      ],
    };
  }
};
</script>
