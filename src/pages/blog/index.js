import * as React from "react";
import {Link, graphql} from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout";

import {linkStyle} from "../../css/homepage.module.css";
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <IdentityCard>
        <p>My personal blog</p>
        <p>
          This is a place where I can learn and hopefully help others do the
          same
        </p>
      </IdentityCard>
      <h1>Latest Blog Posts:</h1>
      {data.allSanityPost.nodes.map((node) => (
        <Container key={node._id}>
          {console.log(node)}
          <p>{node._createdAt}</p>

          <h2>{node.title}</h2>
          <Link to={`/blog/${node.slug.current}`} className={linkStyle}>
            <BlogButton>Read More</BlogButton>
          </Link>
        </Container>
      ))}
    </Layout>
  );
};

const Container = styled.article`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  /* background-color: #fff; */
  border-radius: 6px;
  overflow: hidden;
  min-width: 300px;
  padding: 16px;
  margin: 16px 0;

  & .project-card-body {
    padding: 8px;
  }

  @media (min-width: 550px) {
    & .project-card-body {
      padding: 16px;
    }
  }
`;

const BlogButton = styled.button`
  display: inline-block;
  color: var(--color-primary);
  background-color: transparent;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

const IdentityCard = styled.div`
  font-size: 1.3rem;
  margin-bottom: 32px;
`;

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        _id
        _createdAt(formatString: "MMMM Do, YYYY")
        _rawBody
        title
        slug {
          current
        }
      }
    }
  }
`;

export default BlogPage;
