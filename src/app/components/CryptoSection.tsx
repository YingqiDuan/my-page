// src/components/CryptoSection.tsx
'use client';
import { CryptoPrice } from '../types/index';

const CRYPTO_NAMES = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  solana: 'Solana'
};

const CryptoSection = ({ 
  prices,
  lastUpdated,
  isLoading,
  error
}: { 
  prices: CryptoPrice;
  lastUpdated: string;
  isLoading: boolean;
  error: string;
}) => (
  <div className="mt-8 animate-fadeIn">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
      Cryptocurrency Prices
    </h3>
    
    {error && (
      <div className="text-red-500 mb-4">{error}</div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(prices).map(([id, { price, change }]) => (
        <div
          key={id}
          className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all hover:shadow-lg"
        >
          <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200">
            {CRYPTO_NAMES[id as keyof typeof CRYPTO_NAMES]}
          </h4>
          <div className="mt-2">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mt-2"></div>
              </div>
            ) : (
              <>
                <p className="text-lg text-gray-600 dark:text-gray-300">{price}</p>
                {change && (
                  <p
                    className={`text-sm mt-1 price-change ${
                      parseFloat(change) >= 0 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}
                  >
                    {change}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
    
    <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
      Last Updated: {isLoading ? 'Updating...' : lastUpdated}
    </p>
  </div>
);

export default CryptoSection;