import React, { useContext, useCallback } from "react";
import { Context, REMOVE_STATE } from "../reducer/context";
import AddState from "./addState";

const ContextApi = () => {
  const { state, dispatch } = useContext(Context);


  const onRemoveState = useCallback((id) => {
    dispatch({
      type: REMOVE_STATE,
      id: id,
    });
  }, []);

  return (
    <>
      {state.map((v) => (
        <div key={v.id}>
          {v.id}.{v.name}
          <button onClick={() => onRemoveState(v.id)}>삭제</button>
        </div>
      ))}
      <AddState></AddState>
    </>
  );
};

export default ContextApi;
