import * as React from "react";
import {graphql} from "gatsby";
// import {MDXRenderer} from "gatsby-plugin-mdx";
import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import Layout from "../../components/layout";

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.sanityPost.title}>
      <ReactMarkdown>{data.sanityPost._rawBody}</ReactMarkdown>
    </Layout>
  );
};

export const query = graphql`
  query SanityPost($id: String!) {
    sanityPost(id: {eq: $id}) {
      _rawBody
      title
      publishedAt(fromNow: true)
    }
  }
`;

export default BlogPost;
