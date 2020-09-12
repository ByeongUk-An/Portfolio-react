import React from "react";
import styled from "styled-components";

const BlockWrap = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 10px #000;

  .headwrap {
    display: flex;
    justify-content: space-between;
    padding: 40px 35px 0;
    margin-bottom: 30px;
  }
  .headabout {
    font-size: 36px;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #00e274;
  }
  .devel {
    margin-left: 50px;
  }
  .aboutwrap {
    margin-left: 20px;
  }
  .about {
    margin-right: 10px;
  }
  .spanwrap {
    margin-right: 10px;
    & > span {
      font-size: 20px;
    }
  }
  .produce {
    width: 750px;
    height: 200px;
    background: tomato;
    margin: 30px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 40px;
  }
  .skillset {
    width: 400px;
    height: 350px;
    background: yellowgreen;
    margin-right: 40px;
    margin-left: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .Etc {
    width: 310px;
    height: 350px;
    background: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .skillwrap {
    display: flex;
  }
`;

function Block2() {
  return (
    <BlockWrap>
      <div className="headwrap">
        <div className="aboutwrap">
          <h1 className="headabout">Home</h1>
        </div>
        <div className="spanwrap">
          <span className="about">Home</span>
          <span>Project</span>
        </div>
      </div>
      <div className="devel">
        <p>안녕하세요. 끊임없이 도전하는 개발자 안병욱입니다.</p>
      </div>
      <div className="produce">아이엠그라운드자기소개하기</div>
      <div className="skillwrap">
        <div className="skillset">언어 및 프레임워크</div>
        <div className="Etc">Etc</div>
      </div>
    </BlockWrap>
  );
}

export default Block2;
