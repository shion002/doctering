import { useCategoryContext } from "../context/useCategoryContext";
import HomeCategory from "./HomeCategory";
import "./HomeMain.css";
import { AnimatePresence, motion } from "framer-motion";

function HomeMain() {
  const { title } = useCategoryContext();

  return (
    <AnimatePresence>
      <div className="HomeMain">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="main_title"
        >
          {title}
        </motion.h1>
        <HomeCategory />
      </div>
    </AnimatePresence>
  );
}
export default HomeMain;
