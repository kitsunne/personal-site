import styled from "styled-components";
import { GiGamepad, GiSamuraiHelmet } from "react-icons/gi";

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
          <span style={{ color: " #4bb49d" }}>"QA Engineer / Game Tester"</span>;
        </p>
        <p>
          stack:{" "}
          <span style={{ color: " #4bb49d" }}>"UE5"</span>;
        </p>
        <p>.testing();</p>
        <p>
          <span style={{ color: "#C863BE" }}> &#125;</span>;
        </p>
        <Speech>
          <Border>
            <Quote>Hi, I am a passionate fresher in GameDev and GameTesting with huge desire to learn. Now I am working as QA Engineer on a cross-platform AAA project under NDA and boosting my skills up in Level Design. </Quote>
          </Border>
        </Speech>
      </FieldInfo>
      <ImageContainer>
        <img src={require("../Images/me2.jpg")} alt="logo"></img>
      </ImageContainer>
      <OptionalInfo>
        <Interest> .gameAddiction </Interest>
        <Interest> .cycling </Interest>
        <Interest> .japaneseMythology </Interest>
        <Interest> .levelDesign</Interest>
        <Interest> .funkoPopCollector </Interest>
        <Interest> .witcherLover </Interest>
        <Interest> .travelling </Interest>
      </OptionalInfo>
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
  width: 85%;
  @media screen and (max-width: 1920px) {
    width: 90%;
  }
  @media screen and (max-width: 1440px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
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
    height:100%;
    margin-top:250px;
  }
  @media screen and (max-width: 350px) {
    margin-top:10px;
  }
 
`;

const OptionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 450px;
  padding: 0 50px;
  font-size: 20px;
  @media screen and (max-width: 1920px) {
    font-size: 15px;
  }
    @media screen and (max-width: 480px) {
      height: 100px;
      font-size: 15px;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 40px 20px;
    }
  `;
const Speech = styled.div`
  margin:10px;
  border: solid black;
  float:left; 
  border-width: 5px 3px 3px 5px;
  border-color:  #ffffff;
  border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
  animation-name: blinking;
  animation-duration: 2s;
  animation-iteration-count: 100;
  @keyframes blinking {
  50% {
    border-color: #f37a53;
    box-shadow: 0px 0px 29px #f37a53;
  }
}
 `;
const Border = styled.div`
  margin:30px;
  transform: rotate(-2deg);
  @media screen and (max-width: 1920px) {
    margin:20px;
  }
  @media screen and (max-width: 480px) {
    margin:15px;
    text-align: center;
  }
`;
const Quote = styled.p`
font-size:25px;
@media screen and (max-width: 1920px) {
    font-size:20px;
  }
    @media screen and (max-width: 480px) {
    font-size: 15px;
  }`;
const Interest = styled.div`
font-weight: bold;
text-shadow: 0px 0px 29px #c863be;
`;

const FieldInfo = styled.div`
  line-height: 35px;
  padding-left: 35px;
  border-left: 3px solid #5b5c66;
  width:800px;
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
    width: 320px;
    height: fit-content;
  }
  

  p {
    font-weight: bold;
    color: #e1e3ef;
    font-size: 22px;
    letter-spacing: 2px;
    @media screen and (max-width: 1920px) {
      font-size: 25px;
  }
    @media screen and (max-width: 1440px) {
      font-size: 20px;
      line-height: 30px;
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
      font-size: 25px;
  }
    @media screen and (max-width: 1440px) {
      font-size: 20px;
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
  img {
    width: 420px;
    border-radius: 50%; 
    @media screen and (max-width: 1920px) {
    width: 450px;
    } 
    @media screen and (max-width: 1440px) {
      width: 300px;
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
      width: 250px;
      align-self: center;
      margin:30px 0;
    }
    @media screen and (max-width: 320px) {
      width: 140px;
      align-self: center;
    }
  }
`;



export default Main;
