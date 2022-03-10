import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card/ProjectCard";

const Section = styled.section`
  margin: 96px 0;
  line-height: 1.4;
  color: var(--color-gray-dark);

  & .section-header {
    font-weight: 700;
    font-size: 2rem;
  }
`;

// ABOUT SECTION
const AboutSection = styled.div`
  & h1 {
    color: var(--color-primary);
    font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  }

  & span {
    color: var(--color-secondary);
  }

  & .about-body {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  & .about-details {
    width: 100%;
  }

  @media (min-width: 660px) {
    & .about-details {
      width: 660px;
    }
  }

  @media (min-width: 915px) {
    & .about-details {
      max-width: 45%;
    }
    & .about-body {
      flex-direction: row;
      gap: 15%;
    }
  }
`;

const ProfileImage = styled.div`
  margin: 0 auto;

  & img {
    border-radius: 50%;
    width: 100%;
  }

  @media (min-width: 915px) {
    & img {
      border-radius: 0;
    }
  }
`;

// SKILLS SECTION
const SkillsSection = styled.div`
  & ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 40%));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
  }

  & li {
    margin-bottom: 10px;
    padding-left: 20px;
  }

  & li::before {
    content: "›";
    display: inline-block;
    margin-left: -1em;
    width: 1em;
    color: var(--color-secondary);
    font-size: 1.3rem;
  }
`;

// PROJECTS SECTION
const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

// CONTACT SECTION
const ContactSection = styled.div`
  & .contact-description {
    max-width: 100%;
    margin-bottom: 40px;
  }

  & .email-link {
    display: inline-block;
    color: var(--color-primary);
    background-color: transparent;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
  }

  & .email-link:hover {
    background-color: hsl(189deg, 94%, 43%, 0.1);
  }

  @media (min-width: 550px) {
    & .contact-description {
      max-width: 80%;
    }
  }

  @media (min-width: 910px) {
    & .contact-description {
      max-width: 50%;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  margin-left: -32px;
  margin-right: -32px;
  padding: 16px;
  /* background-color: #fefce8; */
  background-color: hsl(189deg, 94%, 43%, 0.1);

  & .footer-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .footer-logo {
    color: #e16162;
  }

  & .footer-links a {
    text-decoration: none;
    color: var(--color-primary);
    margin-left: 8px;
  }
`;

const Portfolio = () => {
  return (
    <Layout pageTitle="Portfolio">
      <Section id="about">
        <AboutSection>
          <h1>
            Hello I am Isai Martinez, a <br />
            <span>Frontend Developer.</span>
          </h1>

          <div className="about-body">
            <p className="about-details">
              Hello I am Isai Martinez. I graduated from Northern Arizona
              University with a Bachelor's Degree in Computer Science. After
              graduating, I found myself attracted to Web Development with a
              focus in Frontend Programming. I am always willing to keep
              learning to improve my skills, and am happy to work with others.
              Below is my resume, or you can stay on the page to check out my
              skills and some of my best projects below. Thank you for your
              time.
            </p>

            <ProfileImage>
              <StaticImage src="../images/image.jpg" alt="photo of me" />
            </ProfileImage>
          </div>
        </AboutSection>
      </Section>

      <Section id="skills">
        <SkillsSection>
          <h1 class="section-header">My Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Styled Components</li>
            <li>NodeJS</li>
          </ul>
        </SkillsSection>
      </Section>

      <Section id="projects">
        <h1 className="section-header">My Projects</h1>

        <ProjectCards>
          <ProjectCard imgSrc={"../../images/proj-1-test.png"}>
            This is the description for this project
          </ProjectCard>
          <ProjectCard imgSrc={"../../images/proj-1-test.png"}>
            This is the description for this project #2
          </ProjectCard>
          <ProjectCard imgSrc={"../../images/proj-1-test.png"}>
            This is the description for this project #3
          </ProjectCard>
        </ProjectCards>
      </Section>

      <Section id="contact">
        <ContactSection>
          <h1 className="section-header">Contact me</h1>
          <p class="contact-description">
            I appreciate you taking the time to look at my website. If you would
            lke to contact me feel free to do so. I will respond as quickly as I
            can.
          </p>

          <a
            class="email-link"
            href="mailto:isaimartinez52@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Send An Email
          </a>
        </ContactSection>
      </Section>

      <Footer>
        <div class="footer-wrapper">
          <div class="footer-logo">
            <p>Isai's Learning Spot</p>
          </div>
          <div class="footer-links">
            <a href="google.com">twitter</a>
            <a href="google.com">github</a>
            <a href="google.com">blog</a>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default Portfolio;
