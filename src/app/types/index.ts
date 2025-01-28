// src/types/index.ts
export interface TimeState {
    sanJose: string;
    shanghai: string;
    montreal: string;
  }
  
  export interface CryptoPrice {
    [key: string]: {
      price: string;
      change: string;
    };
  }
  
  export interface CoinCapData {
    id: string;
    priceUsd: string;
    changePercent24Hr: string;
  }