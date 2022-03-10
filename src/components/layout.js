import {Link, useStaticQuery, graphql} from "gatsby";
import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {overlay, hidden} from "./layout.module.css";
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --color-primary: #164e63;
  --color-primary-500: #06b6d4;
  --color-secondary: #facc15;
  --color-gray-dark: #111827;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #ffffff;
  font-family: "Lato", sans-serif;
}
`;

const Container = styled.div`
  margin: 18px 16px;
  line-height: 1.4;
  color: var(--color-gray-dark);

  @media (min-width: 550px) {
    margin: 15px 32px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsl(190deg, 5%, 80%);
  padding: 18px 32px;
  margin-left: -32px;
  margin-right: -32px;

  @media (min-width: 550px) {
    padding: 15px 32px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  gap: 32px;

  /* & li {
    padding-left: 2rem;
  } */

  & li a {
    text-decoration: none;
    color: var(--color-primary);
    font-size: 1.3rem;
  }

  & li a:hover {
    color: #facc15;
  }
`;

const SiteTitle = styled.header`
  font-size: 1.5rem;
  color: #e16162;
  font-weight: 700;

  @media (min-width: 550px) {
    font-size: 2rem;
  }
`;

const DesktopNavigation = styled.nav`
  display: none;

  @media (min-width: 1100px) {
    display: revert;
  }
`;

const HamburgerButton = styled.button`
  text-align: left;
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  background: transparent;
  border: none;
  transition: all 0.25s;
  display: block;

  & .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
  }

  & .hamburger-middle {
    transform: translateY(7px);
  }

  & .hamburger-bottom {
    transform: translateY(14px);
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  color: #000;
  width: 90%;
  height: 100%;
  padding: 30px;
  transition: all 0.3s;
  z-index: 1000;

  & ul li {
    list-style: none;
  }

  & a {
    text-decoration: none;
    font-size: 1.25rem;
    color: var(--color-primary);
    line-height: 1.4;
  }

  & :focus {
    color: var(--color-secondary);
  }

  @media (min-width: 1100px) {
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0.5rem;
  margin: 16px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const Layout = ({pageTitle, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <HeadingContainer>
          <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          {/* <DesktopNavigation>
            <NavLinks>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </NavLinks>
          </DesktopNavigation> */}
          {/* <HamburgerButton onClick={toggleMobileMenu}>
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </HamburgerButton> */}
        </HeadingContainer>
        <div className={`${overlay} ${isOpen ? "" : hidden}`} />
        {/* <MobileMenu className={isOpen ? "" : hidden}>
          <CloseButton onClick={toggleMobileMenu}>X</CloseButton>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </MobileMenu> */}
        <main>{children}</main>
      </Container>
    </React.Fragment>
  );
};
export default Layout;
