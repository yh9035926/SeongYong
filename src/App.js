import React from "react";
import Callback from "./components/Callback";
import Effect from "./components/Effect";
import Memo from "./components/Memo";

const App = () => {
  return (
    <div>
      <div>안녕하세요</div>
      <Memo />
      <Callback></Callback>
      <Effect></Effect>
    </div>
  );
};

export default App;
