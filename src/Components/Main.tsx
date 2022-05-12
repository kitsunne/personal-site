import styled from "styled-components";


const Main = () => {
  document.title = "kitsunne: about";
  return (
    <MainWrapper>
      <FieldInfo>
        <p>
          const <span style={{ color: "#F37A53" }}>human</span> ={" "}
          <span style={{ color: "#C863BE" }}> &#x7B; </span>
        </p>
        <p>
          name:
          <span style={{ color: " #4bb49d" }}>“Daria Kiseliova”</span>;
        </p>
        <p>
          position:
          <span style={{ color: " #4bb49d" }}>"Frontend Developer"</span>;
        </p>
        <p>
          stack:{" "}
          <span style={{ color: " #4bb49d" }}>"JS,React,Typescript"</span>;
        </p>
        <p>.coding();</p>
        <p>
          <span style={{ color: "#C863BE" }}> &#125;</span>;
        </p>
      </FieldInfo>

      <ImageContainer>
        <img src={require("../Images/sticker.png")} alt="logo"></img>
      </ImageContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 75%;
  @media screen and (max-width: 1920px) {
    width: 75%;
  }
  @media screen and (max-width: 1440px) {
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
    width: 91%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FieldInfo = styled.div`
  line-height: 35px;
  padding-left: 35px;
  align-self: center;
  border-left: 3px solid #5b5c66;
  width:900px;
  @media screen and (max-width: 1920px) {
    margin-left: 55px;
  }

  @media screen and (max-width: 768px) {
    padding: 25px 0;
  }
  @media screen and (max-width: 480px) {
    text-align: left;
    line-height: 20px;
    border-left: 3px solid #5b5c66;
    margin-top:40px;
    margin-left: 30px;
    padding: 0 20px 0 10px;
   
    width: 300px;
    height: fit-content;
  }

  p {
    font-weight: bold;
    color: #e1e3ef;
    font-size: 22px;
    letter-spacing: 2px;
    @media screen and (max-width: 1920px) {
      font-size: 30px;
  }
    @media screen and (max-width: 1440px) {
      font-size: 24px;
      line-height: 40px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 20px;
      line-height: 29px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 29px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
      line-height: 15px;
    }
  }
  p:nth-child(2) {
    margin-left: 25px;
   
    @media screen and (max-width: 480px) {
      margin-left: 15px;
    }
  }
  p:nth-child(3) {
    margin-left: 25px;
    @media screen and (max-width: 480px) {
      margin-left: 15px;
    }
  }
  p:nth-child(4) {
    margin-left: 25px;
    @media screen and (max-width: 480px) {
      margin-left: 15px;
    }
  }
  p:nth-child(5) {
    margin-left: 25px;
    @media screen and (max-width: 480px) {
      margin-left: 15px;
    }
  }
  span {
    font-size: 25px;
    font-weight: bold;
    @media screen and (max-width: 1920px) {
      font-size: 30px;
  }
    @media screen and (max-width: 1440px) {
      font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
const ImageContainer = styled.div`
  margin: 0 auto;
  align-self:flex-end;
  img {
    width: 420px;
    @media screen and (max-width: 1920px) {
    width: 500px;
    } 
    @media screen and (max-width: 1440px) {
      width: 400px;
    }
    @media screen and (max-width: 1024px) {
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      width: 280px;
      align-self: center;
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      width: 220px;
      align-self: center;
    }
    @media screen and (max-width: 320px) {
      width: 140px;
      align-self: center;
    }
  }
`;

export default Main;
