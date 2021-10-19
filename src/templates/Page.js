import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Seo from "../atoms/SEO"

const H1 = styled.h1`
  margin: 0 0 1rem 0;
  padding-bottom: 0.3em;
  font-weight: 600;
  line-height: 1.25;
  border-bottom: 1px solid #eaecef;
`
const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`

const Title = styled.span`
  margin-left: ${p => (p.hasBack ? "0" : "27px")};
`

export default function Page({ title, back, children }) {
  return (
    <Container>
      <Seo />
      {title && (
        <H1>
          {back && <Link to={back}>{"< "}</Link>}
          <Title hasBack={!!back}>{title}</Title>
        </H1>
      )}
      {children}
    </Container>
  )
}
