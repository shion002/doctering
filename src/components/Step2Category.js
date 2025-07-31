import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";
const Step2Category = () => {
    const { step, category, handleCategorySelect, handleBack } = useCategoryContext();
    return (_jsxs(_Fragment, { children: [CategoryMap[2][category].map((item, index) => (_jsx(HomeButton, { text: item.title, categoryClick: () => {
                    handleCategorySelect(item.value);
                }, custom: index }, item.title))), _jsx(HomeButton, { text: "\uB4A4\uB85C\uAC00\uAE30", categoryClick: () => {
                    handleBack();
                }, custom: CategoryMap[2][category].length }, `back-${step}`)] }));
};
export default Step2Category;
