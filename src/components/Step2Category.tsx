import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";

const Step2Category = () => {
  const { step, category, handleCategorySelect, handleBack } =
    useCategoryContext();

  type CategoryType = keyof (typeof CategoryMap)[2];

  return (
    <>
      {CategoryMap[2][category as CategoryType].map((item, index) => (
        <HomeButton
          key={item.title}
          text={item.title}
          categoryClick={() => {
            handleCategorySelect(item.value);
          }}
          custom={index}
        />
      ))}
      <HomeButton
        key={`back-${step}`}
        text="뒤로가기"
        categoryClick={() => {
          handleBack();
        }}
        custom={CategoryMap[2][category as CategoryType].length}
      />
    </>
  );
};

export default Step2Category;
