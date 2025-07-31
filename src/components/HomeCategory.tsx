import { useCategoryContext } from "../context/useCategoryContext";
import Step1Category from "./Step1Category";
import Step2Category from "./Step2Category";
import Step3Category from "./Step3Category";
import Step4SymptomResult from "./Step4SympmtomResult";

const HomeCategory = () => {
  const { step } = useCategoryContext();

  switch (step) {
    case 1:
      return <Step1Category />;
    case 2:
      return <Step2Category />;
    case 3:
      return <Step3Category />;
    case 4:
      return <Step4SymptomResult />;
    default:
      break;
  }
};

export default HomeCategory;
