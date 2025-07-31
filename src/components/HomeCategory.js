import { jsx as _jsx } from "react/jsx-runtime";
import { useCategoryContext } from "../context/useCategoryContext";
import Step1Category from "./Step1Category";
import Step2Category from "./Step2Category";
import Step3Category from "./Step3Category";
import Step4SymptomResult from "./Step4SympmtomResult";
const HomeCategory = () => {
    const { step } = useCategoryContext();
    switch (step) {
        case 1:
            return _jsx(Step1Category, {});
        case 2:
            return _jsx(Step2Category, {});
        case 3:
            return _jsx(Step3Category, {});
        case 4:
            return _jsx(Step4SymptomResult, {});
        default:
            break;
    }
};
export default HomeCategory;
