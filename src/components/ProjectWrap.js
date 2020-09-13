import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Line from "../images/Line.jpeg";
import github from "../images/github.svg";
import todo from "../images/todolist.jpeg";
import git from "../images/github.jpeg";

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .headwrap {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 35px 0;
    margin-bottom: 30px;
  }
  .headabout {
    font-size: 42px;
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #00e274;
  }
  .aboutwrap {
    margin-left: 20px;
  }
  .about {
    margin-right: 20px;
  }
  .spanwrap {
    margin-right: 10px;
    font-size: 25px;
    color: #354457;
  }
  .imgwrap {
    position: relative;
  }
  .overay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 14px;
    transition: 0.5s;
    opacity: 0;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgwrap:hover .overay {
    opacity: 1;
  }
`;
const Aboutlink = styled(Link)`
  font-size: 25px;
  &:nth-child(1) {
    color: #354457;
  }
  &:nth-child(2) {
    color: #00e670;
  }
  &:hover {
    color: #00e670;
  }
`;
const GridWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 210px);
  grid-template-columns: repeat(3, 240px);
  grid-gap: 20px;
  margin: 0 auto;
  .line {
    display: block;
    width: 100%;
    height: 80%;
    border: 1px solid #00e373;
    border-radius: 14px;
    margin-bottom: 7px;
  }
  .logo {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  .logowrap {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      display: block;
      height: 100%;
      color: black;
      line-height: 32px;
    }
  }
`;

function ProjectWrap() {
  return (
    <ProjectBlock>
      <div className="headwrap">
        <div className="aboutwrap">
          <h1 className="headabout">Project</h1>
        </div>
        <div className="spanwrap">
          <Aboutlink to="/">
            <span className="about">Home</span>
          </Aboutlink>
          <Aboutlink to="/project">
            <span>Project</span>
          </Aboutlink>
        </div>
      </div>
      <GridWrap>
        <div className="imgwrap">
          <a href="http://webdev.iptime.org/abw/Line/#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="https://todolist.woogi.dev/">
            <img src={todo} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Todo List</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="https://portfolio.woogi.dev/GitHub/">
            <img src={git} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Github Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>

        <div className="imgwrap">
          <a href="#">
            <img src={Line} alt="사진" className="line" />
            <div className="logowrap">
              <img className="logo" src={github} alt="로고" />
              <span>Line Clone</span>
            </div>
            <div className="overay">
              <div>홈페이지로 이동</div>
            </div>
          </a>
        </div>
      </GridWrap>
    </ProjectBlock>
  );
}

export default ProjectWrap;
