import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import HomeButton from "./HomeButton";

const Step3Category = () => {
  const {
    category,
    step,
    handleCategorySelect,
    handleBack,
    handleCategoryReset,
    selectSymptom,
  } = useCategoryContext();

  type SubCategoryType = keyof (typeof CategoryMap)[3];

  return (
    <>
      {CategoryMap[3][category as SubCategoryType].map((item, index) => (
        <HomeButton
          key={item.title}
          text={item.title}
          categoryClick={() => {
            selectSymptom(item.title);
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
        custom={CategoryMap[3][category as SubCategoryType].length - 1}
      />
      <HomeButton
        text="처음으로"
        categoryClick={() => {
          handleCategoryReset();
        }}
        custom={CategoryMap[3][category as SubCategoryType].length}
      />
    </>
  );
};

export default Step3Category;
