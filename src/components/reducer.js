import React, { useReducer } from "react";
import { reducer } from "../reducer";

const Reducer = () => {
  const initialState = 5;

  const [number, dispatch] = useReducer(reducer, initialState);

  const onIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const onDecrement = () => {
    dispatch({
      type: "DECREMENT",
      data: {
        username: 1,
        userpw: 1234,
      },
    });
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Reducer;
