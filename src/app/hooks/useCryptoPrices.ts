// src/hooks/useCryptoPrices.ts
import { useState, useEffect } from 'react';
import { CryptoPrice, CoinCapData } from '../types/index';

const CRYPTO_IDS = ['bitcoin', 'ethereum', 'solana'];

const useCryptoPrices = () => {
  const [prices, setPrices] = useState<CryptoPrice>({});
  const [lastUpdated, setLastUpdated] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPrices = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.coincap.io/v2/assets?ids=${CRYPTO_IDS.join(',')}`
      );
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const { data } = await response.json() as { data: CoinCapData[] };
      
      const updatedPrices = data.reduce((acc: CryptoPrice, coin) => {
        acc[coin.id] = {
          price: `$${parseFloat(coin.priceUsd).toLocaleString(undefined, { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}`,
          change: `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
        };
        return acc;
      }, {} as CryptoPrice);

      setPrices(updatedPrices);
      setLastUpdated(new Date().toLocaleTimeString());
      setError('');
    } catch (err) {
      setError('Failed to fetch cryptocurrency prices');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return { prices, lastUpdated, isLoading, error };
};

export default useCryptoPrices;