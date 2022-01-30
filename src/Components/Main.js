import React from "react";

import styled from "styled-components";
import logo from ".././Images/logo.svg";

const Main = () => {
  let human = {
    nick: "kitsunne",
    position: "Frontend Developer",
    stack: "HTML,CSS,JS,React,TypeScript",
  };
  return (
    <MainWrapper>
      <PresentationalWrapper>
        <JobInformation>
          <FieldInfo>
            <h1>Hi,my name is Daria Kiseliova</h1>
            <h1>
              I`m a <span>SOFTWARE ENGINEER</span>
            </h1>
          </FieldInfo>
        </JobInformation>
        <ImageContainer>
          <img src={logo}></img>
        </ImageContainer>
      </PresentationalWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  grid-area: main;
  cursor: pointer;
`;
const PresentationalWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-content: center;
`;
const FieldInfo = styled.div`
  display: flex;
  margin: 0 auto;
  align-content: center;
  flex-direction: column;

  h1:nth-child(1) {
    font-size: 30px;
    color: white;
    letter-spacing: 8px;
  }
  h1:nth-child(2) {
    font-size: 30px;
    color: white;
    letter-spacing: 8px;
  }
  span:nth-child(1) {
    text-shadow: 0 0 5px #fff, 0 0 2px #fff, 0 0 1px #fff, 0 0 2px #0fa,
      0 0 2px #0fa, 0 0 2px #0fa, 0 0 10px #0fa, 0 0 3px #0fa;
  }
`;
const JobInformation = styled.div`
  align-self: center;
  display: flex;
  align-content: center;
`;
const ImageContainer = styled.div`
  align-self: flex-end;
  img {
    width: 450px;
    margin: 15px;
  }
`;

export default Main;
