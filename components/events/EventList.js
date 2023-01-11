import React from 'react';
import EventItem from './EventItem';
import classes from './eventList.module.css';
function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem event={event} />;
      })}
    </ul>
  );
}

export default EventList;
