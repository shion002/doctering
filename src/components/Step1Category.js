import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";
const Step1Category = () => {
    const { handleCategorySelect } = useCategoryContext();
    return (_jsx(_Fragment, { children: CategoryMap[1].map((item, index) => (_jsx(HomeButton, { text: item.title, categoryClick: () => {
                handleCategorySelect(item.value);
            }, custom: index }, item.value))) }));
};
export default Step1Category;
