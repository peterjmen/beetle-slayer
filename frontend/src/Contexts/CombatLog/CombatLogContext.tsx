import React, { createContext, useContext, useState } from "react";

interface CombatLogContextType {
  combatLog: string[];
  addCombatLog: (message: string) => void;
}

const CombatLogContext = createContext<CombatLogContextType | undefined>(
  undefined
);

export const CombatLogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [combatLog, setCombatLog] = useState<string[]>([]);

  const addCombatLog = (message: string) => {
    setCombatLog((prevLog) => [...prevLog, message]);
  };

  return (
    <CombatLogContext.Provider value={{ combatLog, addCombatLog }}>
      {children}
    </CombatLogContext.Provider>
  );
};

export const useCombatLog = () => {
  const context = useContext(CombatLogContext);
  if (!context) {
    throw new Error("useCombatLog must be used within a CombatLogProvider");
  }
  return context;
};
