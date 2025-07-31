import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CategoryContext } from "./CategoryContext";
export const CategoryProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState("");
    const [categoryHistory, setCategoryHistory] = useState([]);
    const [title, setTitle] = useState("어디가 불편하신가요?");
    const selectSymptom = (item) => {
        setTitle(item);
    };
    const handleCategorySelect = (newCategory) => {
        setCategory(newCategory);
        setCategoryHistory((prev) => [...prev, newCategory]);
        setStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setCategoryHistory((prev) => {
            const newHistory = prev.slice(0, -1);
            setCategory(newHistory[newHistory.length - 1] || "");
            return newHistory;
        });
        setStep((prev) => Math.max(1, prev - 1));
        if (step === 4) {
            setTitle("어디가 불편하신가요?");
        }
    };
    const lastLocation = (category, categoryHistory) => {
        setCategory(category);
        setCategoryHistory(categoryHistory);
        setStep(4);
    };
    const handleCategoryReset = () => {
        setCategoryHistory([]);
        setCategory("");
        setStep(1);
        setTitle("어디가 불편하신가요?");
    };
    const value = {
        step,
        category,
        handleCategorySelect,
        handleBack,
        categoryHistory,
        handleCategoryReset,
        title,
        selectSymptom,
        lastLocation,
    };
    return (_jsx(CategoryContext.Provider, { value: value, children: children }));
};
