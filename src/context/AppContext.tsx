import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { artists } from '../data/artists';
import { Artist } from '../types';

interface AppContextType {
  user: string | null;
  balance: number;
  currentArtist: Artist | null;
  setUser: (email: string | null) => void;
  addToBalance: (amount: number) => void;
  withdrawBalance: (amount: number) => void;
  getRandomArtist: () => Artist;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);
  const [currentArtist, setCurrentArtist] = useState<Artist | null>(null);
  
  // Initialize from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedBalance = localStorage.getItem('balance');
    
    if (savedUser) {
      setUser(savedUser);
    }
    
    if (savedBalance) {
      setBalance(Number(savedBalance));
    }

    // Set initial artist
    if (!currentArtist) {
      setCurrentArtist(getRandomArtist());
    }
  }, []);
  
  // Save to localStorage when values change
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);
  
  const handleSetUser = (email: string | null) => {
    setUser(email);
    if (!email) {
      setBalance(0);
      localStorage.removeItem('balance');
    }
  };
  
  const addToBalance = (amount: number) => {
    setBalance(prev => prev + amount);
  };
  
  const withdrawBalance = (amount: number) => {
    if (amount <= balance) {
      setBalance(prev => prev - amount);
    }
  };

  const getRandomArtist = (): Artist => {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
  };

  const refreshArtist = () => {
    setCurrentArtist(getRandomArtist());
  };
  
  return (
    <AppContext.Provider 
      value={{ 
        user, 
        balance, 
        currentArtist,
        setUser: handleSetUser, 
        addToBalance, 
        withdrawBalance,
        getRandomArtist
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};