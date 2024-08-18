'use client';
import Input from '../input';
import SaveButton from '../buttons/saveButton';
import CancelButton from '../buttons/cancelButton';
import { useState } from 'react';

const CustomView = (props) => {
  const { setOpenColorPicker, selectedColor, setSelectedColor, colors } = props;
  const [fullHex, setFullHex] = useState('#');
  const [showColor, setShowColor] = useState(false);

  function hexHandler(){
    const hexInput = document.getElementById('hexInput');
    if (hexInput.value.length>6){
      hexInput.value = hexInput.value.slice(0,6);
    } else if (hexInput.value.length===6){
      setFullHex(`#${hexInput.value}`);
      setShowColor(true);
      setSelectedColor(fullHex);
    } else {
      setShowColor(false);
    }
  }

  function saveHandler(){
    colors.map((color) => {
      if (color.hex === fullHex){
        setSelectedColor(color);
      }
    })
  }
  return (
    <div className="relative flex my-4 items-center">
      <div className="flex flex-col gap-1 items-center">
        <Input label="HEX" onChangeHandler={() => hexHandler()} id="hexInput" />
        <Input label="R" />
        <Input label="G" />
        <Input label="B"/>
      </div>
      <div className="absolute top-4 right-0 h-16 w-16 rounded-2xl bg-transparent border-1 border-slate-200 border-double">
        {showColor ?
          <div style={{ backgroundColor: fullHex}} className="absolute top-4 right-0 h-16 w-16 rounded-2xl"/>
        :
          <></>
        }
      </div>
      <div className="absolute -bottom-4 right-0 flex gap-2">
        <CancelButton setOpenColorPicker={setOpenColorPicker} color={selectedColor} />
        <SaveButton setOpenColorPicker={setOpenColorPicker} color={selectedColor} onClickHandler={saveHandler}/>
      </div>
    </div>
  )
}
export default CustomView;