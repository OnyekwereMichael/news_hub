import React from 'react';

const stories = [
  'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
  'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
  'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
  'Foden Sparkles As Man City Crush Spineless Man United',
  'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
];

const MoreStories = () => (
  <section>
    <h3 className="font-bold text-gray-700 mb-4 text-lg tracking-tight">MORE STORIES</h3>
    <ul className="space-y-4">
      {stories.map((story, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-red-600 rounded-sm inline-block flex-shrink-0" />
          <span className="font-medium text-[#282828] leading-snug text-base">{story}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default MoreStories; 