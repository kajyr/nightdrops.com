import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Page from "../templates/Page";
import GlobalStyle from "../atoms/GlobalStyle";

import { linkProject } from "../helpers";

const Ul = styled.ul`
  margin: 0;
`;
export default function Portfolio({ data }) {
  const {
    allPortfolioYaml: { edges },
  } = data;
  return (
    <>
      <GlobalStyle />
      <Page title="nightdrops" back="/">
        <Ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={linkProject(node)}>
                {node.title}
                {node.shortDesc && `: ${node.shortDesc}`}
              </Link>{" "}
              - {node.year}
            </li>
          ))}
        </Ul>
      </Page>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allPortfolioYaml {
      edges {
        node {
          id
          title
          slug
          shortDesc
          year
        }
      }
    }
  }
`;
