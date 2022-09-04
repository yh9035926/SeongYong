import React from "react";

const TodoList = ({ onRemoveHandler, state }) => {
  return (
    <div>
      {state.id}. {state.Todo}
      <button onClick={() => onRemoveHandler(state.id)}>완료</button>
    </div>
  );
};

export default TodoList;
