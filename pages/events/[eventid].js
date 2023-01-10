import React from 'react';
import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>event detailed page..</h1>
    </div>
  );
}

export default EventDetailPage;
