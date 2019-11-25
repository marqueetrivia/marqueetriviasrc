<template>
  <Layout>
    <main class="events">
      <header class="section section--yellow">
        <div class="container">
          <h1>Upcoming Trivia Nights</h1>
        </div>
      </header>
      <section class="section section--yellow">
        <div class="container">
          <ul class="events__list">
            <li
            class="event"
            v-for="event in events"
            :key="event.node.id">
              <div class="card">
                <div class="event__inner grid">
                  <div class="grid-1of3 grid-push-2of3 grid-1of1--tablet-large">
                    <div class="event__image background-image">
                      <g-image src="~/assets/triviaevents/openingnight/openingnight-sq.png"/>
                    </div>
                  </div>
                  <div class="grid-2of3 grid-pull-1of3 grid-1of1--tablet-large">
                    <div class="event__details">
                      <g-link
                      :to='`/triviaevent/${event.node.slug}`'>
                        <h3 class="event__title">{{event.node.title}}</h3>
                        <div
                        class="event__description"
                        v-html="event.node.acf.description"/>
                      </g-link>
                      <div class="event__ctas">
                        <a
                        href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NjBwbThwajRjNWkzOGI5aGNrbzZjYjlrY3BoMzRiYjI2c3BtMmJiMWM0bzZhZDM2Nm9xM2dvajZjOCBtYXJxdWVldHJpdmlhLmNvbV92cTZwcmhpbmIzZWwwbWZjbG10MGp1ZjUyZ0Bn&tmsrc=marqueetrivia.com_vq6prhinb3el0mfclmt0juf52g%40group.calendar.google.com"
                        class="button"
                        target="_blank"
                        rel="noopenner">Add To Google Calendar</a>
                        <g-link to="~/assets/triviaevents/openingnight/OpeningNight.ics" class="button">Add To iCal</g-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
  query TriviaEvents {
    allWordPressTriviaevent {
      edges {
        node {
          id
          title
          slug
          acf {
            dateTime
            description
            location {
              address
            }
          }
        }
      }
    }
  }
</page-query>

<style lang="scss">
  @import "@/styles/pages/events.scss";
</style>

<script>
export default {
  name: 'EventsPage',
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.events = this.$page.allWordPressTriviaevent.edges;
  },
  metaInfo: {
    title: 'Events',
    meta: [
      {
        property: "og:title",
        content: "Marquee Trivia Events",
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
}
</script>