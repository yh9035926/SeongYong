import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>성공이다 : {count}</h1>
      <h1>성공이다 : {count}</h1>
      <h1>성공이다 : {count}</h1>
      <button onClick={increment}>클릭</button>
    </div>
  );
};

export default Counter;
