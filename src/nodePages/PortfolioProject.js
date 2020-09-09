import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Lightbox from "lightbox-react"
import "lightbox-react/style.css"

import Page from "../templates/Page"
import GlobalStyle from "../atoms/GlobalStyle"

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 30%;
    border: none;
    appearance: none;
    background: inherit;
    cursor: pointer;
  }
`

export default function PortfolioProject({ data }) {
  const [lightboxOpenIndex, setLbOpenIndex] = useState(null)

  const { portfolioYaml } = data
  const { title, url, images } = portfolioYaml

  const isOpen = lightboxOpenIndex !== null
  const lbImages = images.map(imageNode => imageNode.childImageSharp.fluid.src)

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
            {images.map((imageNode, index) => (
              <button key={imageNode.id} onClick={() => setLbOpenIndex(index)}>
                <Img fluid={imageNode.childImageSharp.fluid} alt={title} />
              </button>
            ))}
          </ImageContainer>
        )}
        {isOpen && (
          <Lightbox
            mainSrc={lbImages[lightboxOpenIndex]}
            nextSrc={lbImages[(lightboxOpenIndex + 1) % lbImages.length]}
            prevSrc={
              lbImages[
                (lightboxOpenIndex + lbImages.length - 1) % lbImages.length
              ]
            }
            onCloseRequest={() => setLbOpenIndex(null)}
            onMovePrevRequest={() =>
              setLbOpenIndex(
                (lightboxOpenIndex + lbImages.length - 1) % lbImages.length
              )
            }
            onMoveNextRequest={() =>
              setLbOpenIndex((lightboxOpenIndex + 1) % lbImages.length)
            }
          />
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
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
