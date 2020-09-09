import React from "react"
import { Link } from "gatsby"
import Page from "../templates/Page"
import GlobalStyle from "../atoms/GlobalStyle"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Page title="nightdrops">
        Hi! I am Carlo. I am a scuba diver and a{" "}
        <Link to="/p">fullstack Js developer</Link>.
      </Page>
    </>
  )
}
