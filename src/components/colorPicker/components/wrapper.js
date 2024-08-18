'use client';
import { useState } from 'react';
import Tabs from './tabs/tabs';
import CustomView from './tabs/customView';
import PresetView from './tabs/presetView';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Preset', 'Custom'];
const colors = [
  {tail: 'bg-stone-950', hex: '#0C0A09', r: '12', g: '10', b: '9'},
  {tail: 'bg-red-800', hex: '#991B1B', r: '153', g: '27', b: '27'},
  {tail: 'bg-red-600', hex: '#DC2626', r: '220', g: '38', b: '38'},
  {tail: 'bg-orange-700', hex: '#C2410C', r: '194', g: '65', b: '12'},
  {tail: 'bg-amber-600', hex: '#D97706', r: '217', g: '119', b: '6'},
  {tail: 'bg-yellow-500', hex: '#EAB308', r: '234', g: '179', b: '8'},
  {tail: 'bg-lime-400', hex: '#A2E635', r: '163', g: '230', b: '53'},
  {tail: 'bg-green-500', hex: '#22C55E', r: '34', g: '197', b: '94'},
  {tail: 'bg-emerald-500', hex: '#10B981', r: '16', g: '185', b: '129'},
  {tail: 'bg-teal-400', hex: '#2DD4BF', r: '45', g: '212', b: '191'},
  {tail: 'bg-cyan-400', hex: '#22D3EE', r: '34', g: '211', b: '238'},
  {tail: 'bg-sky-500', hex: '#0EA5E9', r: '14', g: '165', b: '233'},
  {tail: 'bg-blue-700', hex: '#1D4ED8', r: '29', g: '78', b: '216'},
  {tail: 'bg-fuchsia-800', hex: '#85198F', r: '134', g: '25', b: '143'},
  {tail: 'bg-pink-600', hex: '#DB2778', r: '219', g: '39', b: '119'},
]

const Wrapper = (props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState('');
  const { setOpenColorPicker } = props
  return (
    <>
      <Tabs
      tabs={tabs}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab} />

      <AnimatePresence mode="wait">
        {selectedTab === 'Preset' && (
          <motion.div key="preset" initial={{ x:-20,opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.4,type: 'spring', bounce: 0.2 }} >
            <PresetView setOpenColorPicker={setOpenColorPicker} colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          </motion.div>
        )}
        {selectedTab === 'Custom' && (
          <motion.div key="custom" initial={{ x:20,opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} transition={{ duration: 0.4,type: 'spring', bounce: 0.2 }} >
            <CustomView setOpenColorPicker={setOpenColorPicker} selectedColor={selectedColor} setSelectedColor={setSelectedColor} colors={colors}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Wrapper;