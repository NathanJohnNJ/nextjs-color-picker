'use client';
import { useState } from 'react';
import Button from './components/buttons/button';
import Container from './components/container';
import Wrapper from './components/wrapper';
import { AnimatePresence, motion } from 'framer-motion';

const ColorPicker = () => {
  const [openColorPicker, setOpenColorPicker] = useState(false);

  return(
    <div className="relative">
      <Button openColorPicker={openColorPicker} setOpenColorPicker={setOpenColorPicker} />
      <AnimatePresence>
        {openColorPicker && (
          <motion.div 
          transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }} 
          initial={{ opacity: 0, scale: 0.4 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.4 }}>
            <Container>
              <Wrapper setOpenColorPicker={setOpenColorPicker}/>
            </Container>
          </motion.div>)}
      </AnimatePresence>
    </div>
  )
}

export default ColorPicker;