import React from 'react';
import EventItem from './EventItem';
import classes from './eventList.module.css';
function EventList({ featuredEvents }) {
  return (
    <ul className={classes.list}>
      {featuredEvents.map((event) => {
        return <EventItem event={event} />;
      })}
    </ul>
  );
}

export default EventList;
