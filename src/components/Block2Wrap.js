import React from "react";
import styled from "styled-components";

const BlockWrap = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 10px #000;
`;

function Block2Wrap(props) {
  return <BlockWrap>{props.children}</BlockWrap>;
}

export default Block2Wrap;
