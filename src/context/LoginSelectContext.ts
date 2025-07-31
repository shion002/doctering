import { createContext } from "react";

interface LoginSelect {
  show: boolean;
  open: () => void;
  close: () => void;
}

export const LoginSelectContext = createContext<LoginSelect | null>(null);
