<template>
  <Layout>
    <main class="events">
      <header class="section section--yellow">
        <div class="container">
          <h1>Trivia Nights</h1>
        </div>
      </header>
      <section class="section section--yellow">
        <div class="container">
          <h2 v-if="events.length">Upcoming Events</h2>
          <p
          v-else
          class="no-events">
            <span>No upcoming events announced... yet.</span>
            Follow us @marqueetrivia and sign-up for the newsletter to
            find out when we post a new night.
          </p>
          <ul class="events__list">
            <li
            class="event"
            v-for="event in events"
            :key="event.node.id">
              <EventCard
              :event='event'
              :isPresent='true'/>
            </li>
          </ul>
          <h2>Past Events</h2>
          <ul class="events__list">
            <li
            v-for="event in pastEvents"
            :key="event.node.id"
            class="event">
              <EventCard
              :event='event'
              :isPresent='false'/>
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
            googleCalendarLink
            icalAsset
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
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventsPage',
  data() {
    return {
      pastEvents: [],
      events: [],
    };
  },
  mounted() {
    const today = new Date();
    this.$page.allWordPressTriviaevent.edges.forEach((event) => {
      const eventDate = new Date(event.node.acf.dateTime.replace(/\-/g, '/'));
      if (eventDate <= today) {
        this.pastEvents.push(event);
      } else {
        this.events.push(event);
      }
    });
  },
  components: {
    EventCard,
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
        content: "https://www.marqueetrivia.com/openingnight-hero.png",
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
        content: "https://www.marqueetrivia.com/openingnight-hero.png",
      }
    ],
  },
}
</script>