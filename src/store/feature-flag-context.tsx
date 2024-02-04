import { createContext } from "react";

interface IProps {
  children: React.ReactNode;
}

const defaultContext = {
  showFilters: true,
};

export const FeatureFlagCxt = createContext(defaultContext);

export default function FeatureFlagContextProvider({ children }: IProps) {
  return (
    <FeatureFlagCxt.Provider value={defaultContext}>
      {children}
    </FeatureFlagCxt.Provider>
  );
}
