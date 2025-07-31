import { createContext } from "react";

export interface CategoryContextType {
  step: number;
  category: string;
  handleCategorySelect: (newCategory: string) => void;
  handleBack: () => void;
  categoryHistory: string[];
  handleCategoryReset: () => void;
  title: string;
  selectSymptom: (item: string) => void;
  lastLocation: (category: string, categoryHistory: string[]) => void;
}

export const CategoryContext = createContext<CategoryContextType | null>(null);
