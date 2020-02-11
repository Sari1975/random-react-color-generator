import React, { useState } from 'react';
import Cover from './Cover';
import Button from './Button';
import Box from './Box';
import randomColor from 'randomcolor';
function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      <Cover />
      <Button onClickRandomColor={() => setColor(randomColor())} />
      <Box color={color} />
      {color}
    </div>
  );
}

export default App;
