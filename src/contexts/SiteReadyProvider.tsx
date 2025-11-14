'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export interface SiteReadyContextType {
  isSiteReady: boolean;
  setSiteReady: (ready: boolean) => void;
}

const SiteReadyContext = createContext<SiteReadyContextType | undefined>(
  undefined
);

interface SiteReadyProviderProps {
  children: ReactNode;
}

export const SiteReadyProvider = ({ children }: SiteReadyProviderProps) => {
  const [isSiteReady, setSiteReady] = useState(false);

  return (
    <SiteReadyContext.Provider value={{ isSiteReady, setSiteReady }}>
      {children}
    </SiteReadyContext.Provider>
  );
};

export const useSiteReady = (): SiteReadyContextType => {
  const context = useContext(SiteReadyContext);

  if (!context) {
    throw new Error('useSiteReady must be used within a SiteReadyProvider');
  }

  return context;
};
