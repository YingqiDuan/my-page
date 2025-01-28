// src/components/TimeSection.tsx
'use client';
import { TimeState } from '../types/index';

const CITIES: { id: keyof TimeState; name: string; timezone: string }[] = [
  { id: 'sanJose', name: 'San Jose', timezone: 'America/Los_Angeles' },
  { id: 'shanghai', name: 'Shanghai', timezone: 'Asia/Shanghai' },
  { id: 'montreal', name: 'Montreal', timezone: 'America/Toronto' },
];


const TimeSection = ({ time }: { time: TimeState }) => (
  <div className="mt-6 animate-fadeIn">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
      Current Time
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {CITIES.map(city => (
        <div 
          key={city.id}
          className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all hover:shadow-lg"
        >
          <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200">
            {city.name}
          </h4>
          <p 
            className="text-lg mt-2 text-gray-600 dark:text-gray-300"
            aria-label={`Current time in ${city.name}`}
          >
            {time[city.id]}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TimeSection;