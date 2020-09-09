import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div``
const NextButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

const Lightbox = ({ childImageSharp }) => {
  return (
    <Wrapper>
      <button onClick={}>Prev</button>
      <Img fluid={childImageSharp.fluid} />
      <button onClick={}>Next</button>
    </Wrapper>
  )
}
