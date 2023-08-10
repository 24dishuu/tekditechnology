import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000');

  return (
    <div>
      <h1>Color Picker</h1>
      <ChromePicker color={color} onChange={(newColor) => setColor(newColor.hex)} />
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default ColorPicker;
