import "./HomeButton.css";
import { motion } from "framer-motion";

interface HomeButtonProps {
  text: string;
  categoryClick: () => void;
  custom?: number;
}

const buttonVariant = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

function HomeButton({ text, categoryClick, custom = 0 }: HomeButtonProps) {
  return (
    <motion.div
      custom={custom}
      variants={buttonVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="HomeButton"
      onClick={categoryClick}
    >
      <button>{text}</button>
    </motion.div>
  );
}

export default HomeButton;
