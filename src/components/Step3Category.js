import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";
const Step3Category = () => {
    const { category, step, handleCategorySelect, handleBack, handleCategoryReset, selectSymptom, } = useCategoryContext();
    return (_jsxs(_Fragment, { children: [CategoryMap[3][category].map((item, index) => (_jsx(HomeButton, { text: item.title, categoryClick: () => {
                    selectSymptom(item.title);
                    handleCategorySelect(item.value);
                }, custom: index }, item.title))), _jsx(HomeButton, { text: "\uB4A4\uB85C\uAC00\uAE30", categoryClick: () => {
                    handleBack();
                }, custom: CategoryMap[3][category].length - 1 }, `back-${step}`), _jsx(HomeButton, { text: "\uCC98\uC74C\uC73C\uB85C", categoryClick: () => {
                    handleCategoryReset();
                }, custom: CategoryMap[3][category].length })] }));
};
export default Step3Category;
