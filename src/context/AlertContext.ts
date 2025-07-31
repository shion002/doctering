import { createContext } from "react";

export interface AlertContextType {
  readAlert: boolean;
  setReadAlert: (value: boolean) => void;
  fetchUnreadStatus: () => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);
