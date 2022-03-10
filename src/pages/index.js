import {Link} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Link
        to="blog"
        style={{
          display: "inline-block",
          color: "var(--color-primary)",
          backgroundColor: "transparent",
          border: "1px solid var(--color-primary)",
          borderRadius: "4px",
          padding: "1.25rem 1.75rem",
          fontSize: "1rem",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Blog Posts
      </Link>
    </Layout>
  );
};

export default IndexPage;
