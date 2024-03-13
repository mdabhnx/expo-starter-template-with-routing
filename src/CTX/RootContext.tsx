import React, { createContext, useState } from "react";

interface RootContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RootContext = createContext<RootContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const RootProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <RootContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </RootContext.Provider>
  );
};
