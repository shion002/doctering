import { useContext } from "react";
import { CategoryContext } from "./CategoryContext";

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("used CategoryProvider Error");
  }
  return context;
};
