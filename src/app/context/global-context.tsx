"use client";
import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the GlobalContextState interface with necessary types
interface GlobalContextState {
    isMaximised: boolean;
    isLoged: boolean;
    setIsLoged: Function;
    setIsMaximised: Function;
    isSideOpened: boolean;
    setIsSideOpened: Function;
}

// Create the context with a default value
const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [isMaximised, setIsMaximised] = useState<boolean>(false);
  const [isSideOpened, setIsSideOpened] = useState<boolean>(false);

  useEffect(() => {

  },[]);

  return (
    <GlobalContext.Provider
      value={{
        isLoged, setIsLoged, isMaximised, setIsMaximised, isSideOpened, setIsSideOpened
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
