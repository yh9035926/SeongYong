import React from "react";

const TodoTitle = ({ state }) => {
  return (
    <div>
      할 일 목록 리스트 <span>{state.length}</span> 개
    </div>
  );
};

export default TodoTitle;
