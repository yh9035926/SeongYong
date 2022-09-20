import React, { useState, useContext } from "react";
import { ADD_STATE, Context } from "../reducer/context";

const AddState = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState("");
  const onChangeInput = (e) => {
    setName(e.target.value);
  };

  const onAddState = () => {
    dispatch({
      type: ADD_STATE,
      id: state[state.length - 1].id + 1,
      name: name,
    });
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 적어주세요"
        value={name}
        onChange={onChangeInput}
      ></input>
      <button onClick={onAddState}>추가하기</button>
    </div>
  );
};

export default AddState;
