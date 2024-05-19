import styled from "styled-components";

const QA = () => {
    document.title = "kitsunne: blog";
  
    return (
      <QAWrapper>
        <TextInfo>
        <h1>Work experience</h1>
        <p> - Working on a cross-platform project under NDA, a multiplayer PVP/PVE shooter in the sci-fi realism genre</p>
        <p> - Communicating with developers, game designers, UX/UI designers, artists and PMs to resolve issues </p>
        <p> - Performing of manual unit, functional, smoke, regression testing on PC and consoles (PS5, Xbox)</p>
        <p> - Performing of Gameplay, Art, UX/UI, Frontend, Backend testing </p>
        <p> - Creating and maintaining up-to-date test documentation ( test cases, check lists and etc.)</p>
        <p> - Participating in the certification of consoles on Playstation and Xbox platforms </p>
        <p> - Creating and supporting of defects in Jira bug tracking system, analyzing of crash reports via Sentry</p>
        <p> - Deploying game servers using Jenkins and working with environments using Lens</p>
        <p> - Analyzing, reviewing of game design documents, participating in development of new features</p>
        <p> - Mentoring new team members</p>
        </TextInfo>
        <MediaInfo>
      <img src={require("../../Images/testing.png")} alt="testing"></img>
      </MediaInfo>
        <OptionalInfo>
        <Skill> Unreal Engine 5 </Skill>
        <Skill> PC </Skill>
        <Skill> PS5 </Skill>
        <Skill> Xbox </Skill>
        <Skill> Git </Skill>
        <Skill> Perforce  </Skill>
        <Skill> Jira  </Skill>
        <Skill> Confluence </Skill>
        <Skill> Figma</Skill>
        <Skill> Sentry </Skill>
        <Skill> Jenkins </Skill>
        <Skill> Lens </Skill>
        <Skill> HTML </Skill>
        <Skill> JS  </Skill>
        <Skill> CSS </Skill>
        </OptionalInfo>
      </QAWrapper>
    );
  };

  const QAWrapper = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
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
    margin-top:100px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-top:300px;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:90%;
    margin-top:290px;
  }
  @media screen and (max-width: 350px) {
    margin-top:240px;
  }
  @media screen and (max-width: 300px) {
    margin-top:340px;
  }
  @media screen and (max-width: 250px) {
    margin-top:380px;
  }
 
`;

const TextInfo = styled.main`
 h1{
  display: flex;
  justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    animation-name: blinking;
  animation-duration: 2s;
  animation-iteration-count: 100;

    @keyframes blinking {
  50% {
    color: #f37a53;
    text-shadow: 0px 0px 29px #f37a53;
  }
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

`;

const MediaInfo = styled.div`
  margin: auto;
  img {
    width: 300px;
    border-radius: 5%; 
    @media screen and (max-width: 1920px) {
    width: 550px;
    } 
    @media screen and (max-width: 1440px) {
      width: 550px;
    }
    @media screen and (max-width: 1024px) {
      width: 600px;
    }
    @media screen and (max-width: 768px) {
      width: 450px;
      align-self: center;
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      width: 350px;
      margin:10px 0;
    }
    @media screen and (max-width: 350px) {
      width: 250px;
      align-self: center;
    }
  }
`;

const OptionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  height: 450px;
  width: 100%;
  padding: 50px 50px;
  font-size: 20px;
  @media screen and (max-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (max-width: 780px) {
      height: 100%;
      font-size: 15px;
      flex-direction: column;
      align-items:center;
      flex-wrap: wrap;
      padding: 40px 20px;
    }
    @media screen and (max-width: 480px) {
      height: 100%;
      font-size: 12px;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 40px 20px;
    }
  `;

const Skill = styled.div`
font-weight: bold;
text-shadow: 0px 0px 29px #4bb49d;
`;


export default QA;