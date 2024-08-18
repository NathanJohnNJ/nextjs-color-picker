import { X } from "lucide-react";
import { motion } from "framer-motion";

const CancelButton = (props) => { 
  const { color, setOpenColorPicker } = props;
  return ( 
    <div>
      <motion.button
      disabled={color === ''}
      whileTap={{ scale: 0.9}}
      className="rounded-full p-1.5 transition-colors duration-75"
      style={{
      backgroundColor: color === '' ? '#1e293b' : '#e50202',
      color: color === '' ? '#64748b' : 'white',
      }}
      onClick={() => setOpenColorPicker(false)} >
        <X className="w-4 h-4" />
      </motion.button>
    </div>
  )
}

export default CancelButton;