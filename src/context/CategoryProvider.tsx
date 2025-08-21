import { useCallback, useEffect, useState } from "react";
import { CategoryContext, CategoryContextType } from "./CategoryContext";

interface Props {
  children: React.ReactNode;
}

export const CategoryProvider = ({ children }: Props) => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [categoryHistory, setCategoryHistory] = useState<string[]>([]);
  const [title, setTitle] = useState("어디가 불편하신가요?");

  const resetToStep1 = useCallback(() => {
    setStep(1);
    setCategory("");
    setCategoryHistory([]);
    setTitle("어디가 불편하신가요?");
    window.history.replaceState(null, "", "#step1");
  }, []);

  useEffect(() => {
    resetToStep1();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [step]);

  const handleBack = useCallback(() => {
    if (step <= 1) return;

    setCategoryHistory((prev) => {
      const newHistory = prev.slice(0, -1);
      const newCategory = newHistory[newHistory.length - 1] || "";
      setCategory(newCategory);
      return newHistory;
    });

    setStep((prev) => {
      const newStep = Math.max(1, prev - 1);
      if (newStep === 1) {
        setTitle("어디가 불편하신가요?");
      }

      window.history.replaceState(null, "", `#step${newStep}`);

      return newStep;
    });
  }, [step]);

  const handleCategorySelect = (newCategory: string) => {
    setCategory(newCategory);
    setCategoryHistory((prev) => [...prev, newCategory]);
    setStep((prev) => {
      const newStep = prev + 1;
      // 앞으로 갈 때는 새로운 히스토리 엔트리 추가
      window.location.hash = `step${newStep}`;
      return newStep;
    });
  };

  const handleCategoryReset = () => {
    resetToStep1();
  };

  const lastLocation = (category: string, categoryHistory: string[]) => {
    setCategory(category);
    setCategoryHistory(categoryHistory);
    setStep(4);
    window.history.replaceState(null, "", "#step4");
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (!hash || hash === "#step1") {
        if (step > 1) {
          setStep(1);
          setCategory("");
          setCategoryHistory([]);
          setTitle("어디가 불편하신가요?");
        }
      }
    };

    const handlePopState = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#step")) {
        const targetStep = parseInt(hash.replace("#step", "")) || 1;

        if (targetStep < step) {
          const stepDiff = step - targetStep;
          let currentStep = step;
          let currentHistory = [...categoryHistory];
          let currentCategory = category;

          for (let i = 0; i < stepDiff; i++) {
            if (currentStep <= 1) break;

            currentHistory = currentHistory.slice(0, -1);
            currentCategory = currentHistory[currentHistory.length - 1] || "";
            currentStep = Math.max(1, currentStep - 1);
          }

          setStep(currentStep);
          setCategory(currentCategory);
          setCategoryHistory(currentHistory);

          if (currentStep === 1) {
            setTitle("어디가 불편하신가요?");
          }
        }
      } else if (step > 1) {
        setStep(1);
        setCategory("");
        setCategoryHistory([]);
        setTitle("어디가 불편하신가요?");
        window.location.hash = "step1";
      }
    };

    if (!window.location.hash) {
      window.history.replaceState(null, "", `#step${step}`);
    }

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [step, handleBack, category, categoryHistory]);

  const selectSymptom = (item: string) => {
    setTitle(item);
  };

  const value: CategoryContextType = {
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

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
