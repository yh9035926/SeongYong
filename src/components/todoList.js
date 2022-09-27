import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_STATE } from "../reducer/todo";

const TodoList = ({ state }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch({
      type: REMOVE_STATE,
      id: state.id,
    });
  };

  return (
    <div>
      {state.id}. {state.todo}
      <button onClick={onDeleteHandler}>완료</button>
    </div>
  );
};

export default TodoList;
