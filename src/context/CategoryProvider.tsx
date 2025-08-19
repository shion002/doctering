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

  // 초기화 함수
  const resetToStep1 = useCallback(() => {
    setStep(1);
    setCategory("");
    setCategoryHistory([]);
    setTitle("어디가 불편하신가요?");
    window.history.replaceState(null, "", "#step1");
  }, []);

  // 컴포넌트 마운트 시 무조건 초기화 (리다이렉트 대응)
  useEffect(() => {
    resetToStep1();
  }, []); // 빈 배열로 한 번만 실행

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

      // 히스토리 스택에 추가하지 않고 현재 URL만 교체
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

    // 특정 위치로 점프할 때는 히스토리 교체
    window.history.replaceState(null, "", "#step4");
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (!hash || hash === "#step1") {
        // step 1로 이동하되, 외부로 나가지 않도록 처리
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
        // 앱 내부 네비게이션
        const targetStep = parseInt(hash.replace("#step", "")) || 1;

        if (targetStep < step) {
          // 뒤로가기 - 단계별로 차례대로 뒤로
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
        // 해시가 없으면 step 1로
        setStep(1);
        setCategory("");
        setCategoryHistory([]);
        setTitle("어디가 불편하신가요?");
        window.location.hash = "step1";
      }
    };

    // 초기 해시 설정
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
