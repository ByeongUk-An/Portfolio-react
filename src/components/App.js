import React from "react";
import Globalstyle from "../styles/Globalstyle";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Wrapblock from "./Wrapblock";
import Router from "../Router";

function App() {
  return (
    <>
      <Wrapblock>
        <Router />
      </Wrapblock>
      <Globalstyle />
    </>
  );
}

export default App;
