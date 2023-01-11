import React from 'react';
import EventList from '../components/events/EventList';
import EventsSearch from '../components/events/EventsSearch';
import { getFeaturedEvents } from '../dummy-data';
function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;
