import { Check } from "lucide-react";
import { motion } from "framer-motion";

const SaveButton = (props) => { 
  const { color, setOpenColorPicker, onClickHandler } = props;

  function saveColor(color){
    console.log(color);
    setOpenColorPicker(false);
  }
  return ( 
    <div>
      <motion.button
      disabled={color === ''}
      whileTap={{ scale: 0.9}}
      className="rounded-full p-1.5 transition-colors duration-75"
      style={{
      backgroundColor: color === '' ? '#1e293b' : '#4dea25',
      color: color === '' ? '#64748b' : 'white',
      }}
      onClick={onClickHandler ? onClickHandler : () => saveColor(color)}>
        <Check className="w-4 h-4 " />
      </motion.button>
    </div>
  )
}

export default SaveButton;