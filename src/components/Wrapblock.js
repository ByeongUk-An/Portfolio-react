import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  width: 1130px;
  height: 90vh;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
`;

function Wrapblock(props) {
  return <Wraper>{props.children}</Wraper>;
}

export default Wrapblock;
