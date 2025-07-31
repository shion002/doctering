import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";

const Step1Category = () => {
  const { handleCategorySelect } = useCategoryContext();

  return (
    <>
      {CategoryMap[1].map((item, index) => (
        <HomeButton
          key={item.value}
          text={item.title}
          categoryClick={() => {
            handleCategorySelect(item.value);
          }}
          custom={index}
        />
      ))}
    </>
  );
};

export default Step1Category;
