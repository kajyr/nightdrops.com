import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Page from "templates/Page"
import GlobalStyle from "atoms/lightbox"

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

  return (
    <>
      <ImageContainer>
        {images.map((imageNode, index) => (
          <button key={imageNode.id} onClick={() => setLbOpenIndex(index)}>
            <GatsbyImage image={imageNode.fixed.gatsbyImageData} alt={alt} />
          </button>
        ))}
      </ImageContainer>
      {isOpen && (
        <Lightbox
          onCloseRequest={() => {
            setLbOpenIndex(null)
          }}
        >
          <GatsbyImage
            image={images[lightboxOpenIndex].fluid.gatsbyImageData}
            alt={alt}
          />
        </Lightbox>
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
  query ($id: String!) {
    portfolioYaml(id: { eq: $id }) {
      title
      url
      highlights
      images {
        id
        fixed: childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300)
        }
        fluid: childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  }
`
