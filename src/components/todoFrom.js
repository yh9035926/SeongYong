import React, { useState } from "react";

const TodoFrom = ({ onAddhandler, id }) => {
  const [todo, setTodo] = useState("");

  const onAddState = () => {
    onAddhandler(id + 1, todo);
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
