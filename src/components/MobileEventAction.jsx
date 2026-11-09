import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EVENTS_INQUIRY_URL } from '@/lib/constants';

export default function MobileEventAction() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#111315]/95 px-4 pt-3 shadow-lg backdrop-blur-md lg:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <a href={EVENTS_INQUIRY_URL} className="event-button w-full bg-[#ff5a1f] text-[#111315]">Plan Your Event <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
    </div>
  );
}
