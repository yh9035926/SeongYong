import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import TodoFrom from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";

const Todo = () => {
  const state = useSelector((state) => state.todo);

  return (
    <div>
      <div>Todo Page</div>
      <TodoTitle state={state}></TodoTitle>
      <TodoFrom></TodoFrom>
      {state.map((v) => (
        <TodoList key={v.id} state={v}></TodoList>
      ))}
    </div>
  );
};

export default Todo;
