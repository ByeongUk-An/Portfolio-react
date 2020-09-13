import React from "react";
import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block2Wrap from "../components/Block2Wrap";
import ProjectWrap from "../components/ProjectWrap";

function Home() {
  return (
    <>
      <Block1 />
      <Block2Wrap>
        <ProjectWrap />
      </Block2Wrap>
    </>
  );
}

export default Home;
