// src/app/page.tsx
'use client';
import useTime from './hooks/useTime';
import useCryptoPrices from './hooks/useCryptoPrices';
import TimeSection from './components/TimeSection';
import CryptoSection from './components/CryptoSection';
import PoemSection from './components/PoemSection';

const HomePage = () => {
  const time = useTime();
  const { prices, lastUpdated, isLoading, error } = useCryptoPrices();

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <TimeSection time={time} />
        <CryptoSection 
          prices={prices}
          lastUpdated={lastUpdated}
          isLoading={isLoading}
          error={error}
        />
        <PoemSection />
      </div>
    </main>
  );
};

export default HomePage;