import React, { createContext, useContext, useState } from "react";

export type ActiveRole = "uiux" | "video";

interface RoleContextValue {
  activeRole: ActiveRole;
  setActiveRole: (role: ActiveRole) => void;
}

const RoleContext = createContext<RoleContextValue>({
  activeRole: "uiux",
  setActiveRole: () => {},
});

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [activeRole, setActiveRole] = useState<ActiveRole>("uiux");
  return (
    <RoleContext.Provider value={{ activeRole, setActiveRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
