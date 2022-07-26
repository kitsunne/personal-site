import styled from "styled-components";

export interface PortfolioTypes{
  title: string;
  image: string;
  demoLink: string;
  githubLink: string;
  alt: string;
  description: JSX.Element;
  technologies: string;
};

const portfolioData: PortfolioTypes[] = [
  {
    title: "Social Network 'BeSocial' ",
    image: require("../../Images/social-network.png"),
    demoLink: "https://social-network-besocial.netlify.app/",
    githubLink: "https://github.com/kitsunne/social-network-react",
    alt: "image of dialog page",
    description: (
      <div>
        <p>It's a social network, where you can Log in and Log out, view users and their profiles, follow or unfollow them, personalize personal profile (upload photo, edit status, etc.), add posts and "like", send messages . </p>
        <div>...IN PROGRESS...</div>
      </div>
    ),
    technologies: "React / Redux / CSS Modules ",
  },
  {
    title: "Multifunctional App",
    image: require("../../Images/app.png"),
    demoLink: "https://multifunctional.netlify.app",
    githubLink: "https://github.com/kitsunne/vanilla-practice-react",
    alt: "image of main page",
    description: (
      <div>
        <p>It's a collection of 10 mini apps implemented at React.And some of them are:</p>
          <div><strong>Reviews slider</strong>, where you can swipe reviews or choose random one</div>
          <div><strong>Dish menu</strong> that allows to choose dishes based on certain category</div>
          <div><strong>Grocery List</strong>, which walks you through the process of creating a simple CRUD. (CRUD just means create, read, update, and delete.)</div>
          <div><strong>Tabs with the information</strong>, each item can be collapsed to reveal the content associated with that item</div>
          <div><strong>A virtual clock</strong> that counts down from a certain date to indicate the end of an event</div>
          <div><strong>Generator of paragraphs</strong>, where you can specify the number of paragraphs you want to see</div>
      </div>
    ),
    technologies: "React / Styled Components",
  }, 
  
];

const Portfolio = () => {
  document.title = "kitsunne: portfolio";
  return (
    <WrapperMain>
      {portfolioData.map(({title, image, demoLink, githubLink, alt, description, technologies}:PortfolioTypes)=>{
        return (
        <Wrapper key={title}>
        <InfoWrapper>
           <Title>{title}</Title>
           <Description>{description}</Description>
        </InfoWrapper>
        <ProjectWrapper>
          <Links>
            <Link href={demoLink} target="_blank">
              Demo
            </Link>
            <Link href={githubLink} target="_blank">
              GitHub
            </Link>
          </Links>
          <ImageContainer>
          <a href={demoLink} target="_blank" rel="noreferrer">
             <Image src={image} alt={alt} />
          </a>
          </ImageContainer>
          <Technologies>{technologies}</Technologies>
        </ProjectWrapper>
      </Wrapper>
      )
      })}
    </WrapperMain>
  );
};
const WrapperMain = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
 
  @media screen and (max-width: 1920px) {
    margin: 0 auto;
    width: 90%;
  }
  @media screen and (max-width: 1440px) {
      margin: 0 auto;
      width: 95%;
    }
  @media screen and (max-width: 768px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    padding-top: 80px;
  }
`;
const Technologies = styled.div`
  padding: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  color: white;
  transition: ease 0.2s;
  padding: 0 10px;
  @media screen and (max-width: 1024px) {
    padding: 15px 20px;
  }
  &:hover {
    color: #4bb49d;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  animation-name: fadeInFromNone;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 90px 0 90px 45px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    border: none;
    flex-direction: column-reverse;
    padding: 40px 0;
  }
  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

const Description = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (max-width: 1366px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    line-height: 1.2;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
    display: flex;
    width:650px;
    height: auto;
    justify-content:center;
    @media screen and (max-width: 768px) {
    height: 205px;
}
@media screen and (max-width: 768px) {
  width:320px;
  height: 180px;
}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1920px) {
    max-width: 550px;
}
@media screen and (max-width: 1440px) {
    max-width: 450px;
}
@media screen and (max-width: 480px) {
    max-width: 350px;
}

`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  
  @media screen and (max-width: 1440px) {
    font-size: 30px;
}
  @media screen and (max-width: 1024px) {
    font-size: 33px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;

const InfoWrapper = styled.div`
  display: block;
  width:800px;
  padding-right: 20px;
  @media screen and (max-width: 1920px) {
    width: 1600px;
  }
  @media screen and (max-width: 1440px) {
   width: 1300px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 30px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  width: 90%;
  padding:5px 0  20px 0;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 1440px) {
    width: 90%;
    padding:20px 0  60px 0;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
    overflow: auto;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: 0;
  }
`;


export default Portfolio;
