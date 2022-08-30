import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const Effect = () => {
  const [color, setColor] = useState("red");
  const onChangeColor = useCallback(() => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [color]);

  useEffect(() => {}, []);

  return (  
    <div>
      <div>Effect</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>변경</button>
    </div>
  );
};

export default Effect;
