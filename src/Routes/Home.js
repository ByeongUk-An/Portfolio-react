import React from "react";
import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block2Wrap from "../components/Block2Wrap";

function Home() {
  return (
    <>
      <Block1 />
      <Block2Wrap>
        <Block2 />
      </Block2Wrap>
    </>
  );
}

export default Home;
