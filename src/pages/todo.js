import React, { useCallback, useState } from "react";
import TodoFrom from "../components/todoFrom";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";

const Todo = () => {
  const [state, setState] = useState([
    { id: 1, Todo: "리액트 공부하기" },
    { id: 2, Todo: "리액트 또 공부하기" },
  ]);

  const onAddhandler = (id, todo) => {
    setState([...state, { id: id, Todo: todo }]);
  };

  const onRemoveHandler = (id) => {
    const removeState = state.filter((item) => item.id !== id);
    setState(removeState);
  };

  return (
    <div>
      <div>Todo Page</div>
      <TodoTitle state={state}></TodoTitle>
      <TodoFrom
        onAddhandler={onAddhandler}
        id={state.length > 0 && state[state.length - 1].id}
      ></TodoFrom>
      {state.map((v) => (
        <TodoList
          key={v.id}
          onRemoveHandler={onRemoveHandler}
          state={v}
        ></TodoList>
      ))}
    </div>
  );
};

export default Todo;
