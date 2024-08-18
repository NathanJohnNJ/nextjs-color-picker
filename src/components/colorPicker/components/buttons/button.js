import { motion } from "framer-motion";
import clsx from "clsx";
import { Palette } from "lucide-react";

const Button = (props) => {
  const { openColorPicker, setOpenColorPicker } = props;

  return (
    <motion.button onClick={() => setOpenColorPicker(!openColorPicker)} whileTap={{ scale: 0.9 }} className={clsx("h-9 w-9 flex justify-center items-center bg-slate-900 rounded-full border border-slate-600 p-2 relative transition-colors duration-75 drop-shadow-lg", openColorPicker ? 'text-slate-200' : 'text-slate-400')}>
      <Palette className="w-5 h-5" />
    </motion.button>
  )
};

export default Button;