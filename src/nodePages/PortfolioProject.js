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

const Gallery = ({ images, alt }) => {
  const [lightboxOpenIndex, setLbOpenIndex] = useState(null)
  if (!images) {
    return null
  }

  const isOpen = lightboxOpenIndex !== null
  const lbImages = images.map(imageNode => imageNode.childImageSharp.fluid.src)

  return (
    <>
      <ImageContainer>
        {images.map((imageNode, index) => (
          <button key={imageNode.id} onClick={() => setLbOpenIndex(index)}>
            <Img fluid={imageNode.childImageSharp.fluid} alt={alt} />
          </button>
        ))}
      </ImageContainer>
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
    </>
  )
}

export default function PortfolioProject({ data }) {
  const { portfolioYaml } = data
  const { title, url, images, highlights } = portfolioYaml

  return (
    <>
      <GlobalStyle />
      <Page title={title} back="/p">
        <h2>Info</h2>
        {highlights && (
          <ul>
            {highlights.map(hi => (
              <li key={hi}>{hi}</li>
            ))}
          </ul>
        )}
        {url && (
          <p>
            Available at:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        )}
        <Gallery images={images} alt={title} />
      </Page>
    </>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    portfolioYaml(id: { eq: $id }) {
      title
      url
      highlights
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
