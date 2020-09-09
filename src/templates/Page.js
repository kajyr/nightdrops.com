import React from "react"
import styled from "styled-components"
import SEO from "../atoms/SEO"

const H1 = styled.h1`
  margin: 0 0 1rem 0;
  padding-bottom: 0.3em;
  font-weight: 600;
  line-height: 1.25;
  border-bottom: 1px solid #eaecef;

  a {
    color: $black;
  }
`
const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`

export default function Page({ title, children }) {
  return (
    <Container>
      <SEO />
      {title && <H1>{title}</H1>}
      {children}
    </Container>
  )
}
