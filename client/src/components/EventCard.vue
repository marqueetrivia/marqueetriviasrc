<template>
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
            <p
            v-if="event.node.acf"
            class="date">
              {{eventDate(event)}}
            </p>
          </g-link>
          <a
          :href='`https://maps.google.com/?q=${event.node.acf.location.address}`'
          rel="no-openner"
          target="_blank"
          class="location">
            <font-awesome-icon :icon="['fas', 'map-marked-alt']"/>
            White Horse Tavern
          </a>
          <g-link
          :to='`/triviaevent/${event.node.slug}`'>
            <div
            class="event__description"
            v-html="event.node.acf.description"/>
          </g-link>
          <div
          v-if="isPresent"
          class="event__ctas">
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
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
    isPresent: Boolean,
  },
  methods: {
    eventDate(event) {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const eventDate = new Date(event.node.acf.dateTime.replace(/\-/g, '/'));
      const eventTime = `${(eventDate.getHours() + 11) % 12 + 1}:${eventDate.getMinutes()}`;
      return `${days[eventDate.getDay()]}, ${months[eventDate.getMonth()]} ${eventDate.getDate()} at ${eventTime}pm`;
    },
  },
}
</script>
