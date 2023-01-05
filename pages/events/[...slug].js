import React from 'react';
import { useRouter } from 'next/router';

function FilteredEvent() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>List of filtered events</h1>
    </div>
  );
}

export default FilteredEvent;
