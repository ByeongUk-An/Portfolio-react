import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mypic from "../images/pic.png";
import mypic2 from "../images/pic2.png";
import svg1 from "../images/witch.svg";
import svg2 from "../images/github.svg";
import Fade from "react-reveal/Fade";

const BlockWrap = styled.div`
  flex: 0 0 25%;
  max-width: 80%;
  height: 93.5%;
  background: #ffffff;
  border-radius: 12px;
  margin-right: 15px;
  box-shadow: 0 0 10px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 20px 20px;
  .mypic {
    width: 120px;
    height: 130px;
    border-radius: 40%;
  }
  .mypic2 {
    width: 300px;
  }
  .dev {
    width: 225px;
    height: 40px;
    background: #f1f2f3;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    span {
      font-size: 18px;
    }
  }
  .infowrap {
    width: 114%;
    height: 240px;
    background: #dadddf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 12px 0;
    margin-bottom: 40px;
  }
  .witch {
    width: 25px;
    height: 25px;
  }
  .witchwrap {
    display: flex;
    margin-top: 5px;
    p {
      line-height: 25px;
      margin-left: 14px;
    }
  }
  .gitwrap {
    display: flex;
  }
  .github {
    width: 25px;
    height: 38px;
    margin-right: 14px;
  }
  .githublink {
    color: #354358;
    display: flex;
    flex-direction: row-reverse;
    line-height: 40px;
    width: 100%;
    height: 40px;
    justify-content: center;
    &:hover {
      background: #ffffff;
    }
  }
  .email {
    font-size: 17px;
  }
  .cellnumber {
    font-size: 17px;
  }
  .emailwrap {
    width: 170px;
    height: 40px;
    background-image: linear-gradient(to right bottom, #00f260, #0575e6);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #ffffff;
      font-size: 20px;
    }
  }
`;

function Block1() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Fade left when={show}>
        <BlockWrap>
          <img className="mypic" src={mypic} alt="사진" />
          <img className="mypic2" src={mypic2} alt="로고사진" />
          <div className="dev">
            <span>Front-end Developer</span>
          </div>
          <div className="infowrap">
            <div className="witchwrap">
              <img className="witch" src={svg1} alt="위치로고" />
              <p>Korea, 대구광역시</p>
            </div>
            <a href="https://github.com/ByeongUk-An" className="githublink">
              Github
              <div className="gitwrap">
                <img className="github" src={svg2} alt="깃헙로고" />
              </div>
            </a>
            <p className="email">quddnr005@naver.com</p>
            <p className="cellnumber">010-6510-0166</p>
          </div>
          <div className="emailwrap">
            <a href="mailto:quddnr005@naver.com">email me</a>
          </div>
        </BlockWrap>
      </Fade>
    </>
  );
}

export default Block1;
