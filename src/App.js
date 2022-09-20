import React from "react";
import ContextApi from "./components/contextApi";
import ContextProvider from "./reducer/context";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <ContextApi></ContextApi>
      </ContextProvider>
    </div>
  );
};

export default App;
