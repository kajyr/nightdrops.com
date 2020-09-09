import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Page from "../templates/Page"
import GlobalStyle from "../atoms/GlobalStyle"

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .gatsby-image-wrapper {
    width: 30%;
  }
`

export default function PortfolioProject({ data }) {
  const { portfolioYaml } = data
  const { title, url, images } = portfolioYaml
  return (
    <>
      <GlobalStyle />
      <Page title={title} back="/p">
        <h2>Info</h2>
        {url && (
          <p>
            Available at:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        )}
        {images && (
          <ImageContainer>
            {images.map(imageNode => (
              <Img
                key={imageNode.id}
                fluid={imageNode.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            ))}
          </ImageContainer>
        )}
      </Page>
    </>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    portfolioYaml(id: { eq: $id }) {
      title
      url
      images {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
