import { AnimatePresence, motion } from 'framer-motion';
import Hex from '../outputs/hex';
import RGB from '../outputs/rgb';
import SaveButton from '../buttons/saveButton';
import CancelButton from '../buttons/cancelButton';

const PresetView = (props) => {
  const { setOpenColorPicker, colors, selectedColor, setSelectedColor } = props;

  return(
    <>
      <div className="flex gap-3 flex-wrap justify-center my-4">
        {colors.map((color, i) => {
          return(
          <button key={i} onClick={() => setSelectedColor(color)} className="relative flex justify-center items-center">
            <div className={`w-6 h-6 border-none rounded-full z-10 ${color.tail}`} />
            <AnimatePresence mode="wait">
              {selectedColor === color && ( 
                <motion.div className="z-0 w-7 h-7 ring-2 ring-blue-500 absolute rounded-full" transition={{
                  type: 'spring', 
                  duration: 0.3, 
                  bounce: 0.2
                }}
                initial={{ opacity: 0, scale: 0.6 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.6 }} />
              )}
            </AnimatePresence>
          </button>)
        })}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between gap-1">
          <Hex color={selectedColor.hex} />
          <RGB color={selectedColor} />
        </div>
        <div className="mt-2 flex gap-2">
        <CancelButton color={selectedColor} setOpenColorPicker={setOpenColorPicker} />
        <SaveButton color={selectedColor} setOpenColorPicker={setOpenColorPicker} />
        </div>
      </div>
    </>
  )
}

 export default PresetView;