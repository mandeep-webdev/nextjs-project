import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';
function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
}

export default HomePage;
