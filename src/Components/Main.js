import React from "react";
import styled from "styled-components";
import logo from ".././Images/logo.svg";

const Main = () => {
  return (
    <MainWrapper>
      <PresentationalWrapper>
        <JobInformation>
          <FieldInfo>
            <p>
              const <span style={{ color: "#C95A89" }}>human</span> = &#x7B;
              <br />
              <br />
              name:
              <span style={{ color: "#1ccbb1" }}>“Daria Kiseliova”</span>;<br />
              position:
              <span style={{ color: "#1ccbb1" }}>"Frontend developer"</span>;
              <br />
              stack:{" "}
              <span style={{ color: "#1ccbb1" }}>"JS,React,Typescript"</span>;
              <br />
              <span style={{ color: "#C95A89" }}>coding()</span>
              <br />
              <br />
              &#125;;
            </p>
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
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 78%;
  @media screen and (max-width: 1024px) {
    width: 91%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const PresentationalWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;
const FieldInfo = styled.div`
  display: flex;
  margin: 0 auto;
  align-content: center;
  flex-direction: column;
  align-items: center;
  p {
    color: white;
    font-size: 40px;
    letter-spacing: 4px;
  }
  span {
    font-size: 40px;
  }
`;
const JobInformation = styled.div`
  align-self: center;
  display: flex;
  align-content: center;
  padding: 40px 0;
  font-size: 40px;

  @media screen and (max-width: 1024px) {
    p,
    span {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    p,
    span {
      font-size: 25px;
    }
    border-left: 0;
  }
  @media screen and (max-width: 400px) {
    p,
    span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    p,
    span {
      font-size: 15px;
    }
  }
`;
const ImageContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  margin: 55px auto;
  @media screen and (max-width: 450px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 170px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 110px;
  }

  img {
    width: 420px;
    margin: 55px auto;
    align-items: center;

    @media screen and (max-width: 1024px) {
      width: 350px;
    }
    @media screen and (max-width: 768px) {
      width: 300px;
    }
    @media screen and (max-width: 450px) {
      width: 250px;
    }
    @media screen and (max-width: 400px) {
      width: 200px;
    }
    @media screen and (max-width: 320px) {
      width: 150px;
    }
  }
`;

export default Main;
