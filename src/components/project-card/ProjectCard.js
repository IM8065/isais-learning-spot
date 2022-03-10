// import {Link} from "gatsby";
import * as React from "react";
import styled from "styled-components";
// import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {StaticImage} from "gatsby-plugin-image";

const Container = styled.div`
  box-shadow: rgb(0 0 0 / 2%) 0.2px 0.5px 1.7px,
    rgb(0 0 0 / 3%) 0.5px 1.1px 3.9px, rgb(0 0 0 / 4%) 1px 1.9px 7.1px,
    rgb(0 0 0 / 4%) 1.6px 3.2px 11.7px, rgb(0 0 0 / 5%) 2.6px 5.3px 19.3px,
    rgb(0 0 0 / 6%) 4.6px 9.2px 33.8px, rgb(0 0 0 / 8%) 10px 20px 73px;
  border-radius: 6px;
  overflow: hidden;
  min-width: 300px;

  & .project-card-image img {
    width: 100%;
  }

  & .project-card-body {
    padding: 8px;
  }

  @media (min-width: 550px) {
    & .project-card-body {
      padding: 16px;
    }
  }
`;

const LinkTag = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  flex: 1;

  & .read-more {
    color: #0891b2;
  }
`;

const ProjectCard = ({children, imgSrc}) => {
  return (
    <LinkTag href="#">
      <Container>
        <div class="project-card-image">
          <StaticImage src="../../images/proj-1-test.png" alt="project photo" />
          {/* <GatsbyImage image={imgSrc} alt="project photo" /> */}
        </div>

        <div class="project-card-body">
          <h2 class="project-card-heading">Project 1</h2>
          <p class="project-card-description">{children}</p>
          <p className="read-more">
            Read Story <span style={{fontSize: 20 + "px"}}>›</span>
          </p>
        </div>
      </Container>
    </LinkTag>
  );
};

export default ProjectCard;
