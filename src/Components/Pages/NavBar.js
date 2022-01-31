import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Home from "../Home";
import { FaGithub, FaLinkedin, FaStarOfLife } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Menu onClick={handleMenuOpen}>
        {!isMenuOpen ? <HiMenu /> : <IoMdClose />}
      </Menu>
      <NavbarWrapper isMenuOpen={isMenuOpen}>
        <Logo>
          <FaStarOfLife id="logo" /> KITSUNNE
        </Logo>
        <LinksContainer>
          <StyledLink to="/" onClick={handleMenuOpen}>
            ABOUT
          </StyledLink>
          <StyledLink to="/portfolio" onClick={handleMenuOpen}>
            PORTFOLIO
          </StyledLink>
          <StyledLink to="/blog" onClick={handleMenuOpen}>
            BLOG
          </StyledLink>
          <StyledLink to="/cv" onClick={handleMenuOpen}>
            CV
          </StyledLink>
        </LinksContainer>
        <SocialIcons>
          <SocialLinks href="https://github.com/kitsunne">
            <FaGithub />
          </SocialLinks>
          <SocialLinks href="https://www.linkedin.com/in/daria-kiseliova/">
            <FaLinkedin />
          </SocialLinks>
          <SocialLinks href="mailto:kisichekk@gmail.com">
            <SiGmail />
          </SocialLinks>
        </SocialIcons>
      </NavbarWrapper>

      <Routes>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

const Menu = styled.div`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }
  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }
  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }
`;

const NavbarWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 5px 160px;
  z-index: 1000;
  border: 1px solid black;
  @media screen and (max-width: 1024px) {
    padding: 30px 0;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    font-size: 15px;
    position: fixed;
    top: 0;
    box-shadow: 5px 5px 20px;
    transition: all 0.3s ease;
    ${(props) =>
      props.isMenuOpen
        ? `
      background: #1ccbb1;
      left: 0;
      opacity: 1;
      position: absolute;
      transition: all 0.3s ease;
      z-index: 1;
    `
        : `
    opacity: 1;
    top: -100%;
    `}
  }
`;
const Logo = styled.h1`
  font-size: 30px;
  color: white;
  #logo {
    color: #16c79e;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00,
      0 0 150px #00ff00;
    width: 15px;
  }
`;
const LinksContainer = styled.div`
  display: block;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0 15px 0;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 20px;
  transition: all 0.2s ease-in-out;
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  text-transform: capitalize;
  letter-spacing: 5px;
  border-radius: 4px;
  padding:5px;
  &:hover {
    &:hover {
    background: #16c79e;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00,
      0 0 150px #00ff00;
    color: white;
  }
    
`;
const SocialIcons = styled.ul`
  display: flex;
  list-style: none;

  a {
    color: white;
    cursor: pointer;
    font-size: 30px;
    margin: 15px;
    color: white;
  }
  &:hover a {
    color: pink;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #ff00de, 0 0 80px #ff00de, 0 0 90px #ff00de, 0 0 100px #ff00de,
      0 0 150px #ff00de;
  }
`;
const SocialLinks = styled.a`
  margin: 0 0.5rem;s
  text-decoration: none;
`;

export default Navbar;