import React from "react";
import Globalstyle from "../styles/Globalstyle";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Wrapblock from "./Wrapblock";

function App() {
  return (
    <>
      <Wrapblock>
        <Block1 />
        <Block2 />
      </Wrapblock>
      <Globalstyle />
    </>
  );
}

export default App;
