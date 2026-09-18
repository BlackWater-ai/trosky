import { useEffect } from 'react';
import { EVENTS_VENUE_URL } from '@/lib/constants';

export default function EventsRedirect() {
  useEffect(() => {
    window.location.replace(EVENTS_VENUE_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <p className="font-inter text-muted-foreground text-center">
        Redirecting to the Trosky Events Venue site.{' '}
        <a href={EVENTS_VENUE_URL} className="text-primary underline underline-offset-4">
          Continue
        </a>
      </p>
    </div>
  );
}
