import styled from "styled-components";

const QA = () => {
    document.title = "kitsunne: blog";
  
    return (
      <QAWrapper>
        <TextInfo>
        <h1>Work experience</h1>
        <p> - Worked on a cross-platform AAA project, a multiplayer PVP / PVE shooter in the sci-fi realism genre and CO-OP indie games</p>
        <p> - Conducting in-engine validation of gameplay mechanics inside Unreal Engine 5 </p>
        <p> - Performing functional / smoke / regression tests on PC and consoles (PS5, Xbox Series S/X), incl. Steam & VK Play</p>
        <p> - Performing API testing (Swagger / Postman) and validate client–server/network scenarios </p>
        <p> - Verifying compatibility and compliance: controllers, localization, accessibility, UI/UX standards</p>
        <p> - Creating and maintaining test plans/cases; defining acceptance criteria and critical risk paths </p>
        <p> - Reporting, prioritizing, and tracking defects in Jira; —-coordinate with Dev, Art, and Product</p>
        <p> - Debugging issues using logs/crash reports (Sentry) and performance / telemetry tools </p>
        <p> - Using DevTools, Lens / Kibana / Grafana for error monitoring and identifying bottlenecks</p>
        <p> - Supporting releases via CI/CD: build test environments, deploy game servers/backends, manage configs and regression after merges</p>
        <p> - Managing Steamworks releases: migrate builds between Steam branches and track versions</p>
        <p> - Mentoring teammates and participate in hiring / onboarding</p>
        </TextInfo>
        <MediaInfo>
    {/* <img src={require("../../Images/testing.png")} alt="testing"></img> */}
      </MediaInfo>
        <OptionalInfo>
        <Skill> Unreal Engine 5 </Skill>
        <Skill> PC </Skill>
        <Skill> PS5/Xbox </Skill>
        <Skill> Perforce/Git </Skill>
        <Skill> Jira / Confluence </Skill>
        <Skill> Jenkins/GitLab </Skill>
        <Skill> Postman/Swagger API </Skill>
        <Skill> Lens/Grafana/Kibana </Skill>
        <Skill> DevTools </Skill>
        <Skill> Kafka </Skill>
        <Skill> Sentry </Skill>
        </OptionalInfo>
      </QAWrapper>
    );
  };

  const QAWrapper = styled.main`
  height: 90vh;
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
    margin-top:330px;
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
    color: #4bb49d;
    text-shadow: 0px 0px 29px #4bb49d;
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
color:#f37a53;
font-weight: bold;
text-shadow: 0px 0px 29px #4bb49d;
`;


export default QA;