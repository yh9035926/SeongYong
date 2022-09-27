import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INSERT_TODO } from "../reducer/todo";

const TodoFrom = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);

  const [todo, setTodo] = useState("");

  const onAddState = () => {
    dispatch({
      type: INSERT_TODO,
      data: { id: state[state.length - 1].id + 1, todo: todo },
    });
    setTodo("");
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 적어주세요"
        value={todo}
        onChange={onChangeTodo}
      ></input>
      <button onClick={onAddState}>추가하기</button>
    </div>
  );
};

export default TodoFrom;
