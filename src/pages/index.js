import React from "react"
import Page from "../templates/Page"
import GlobalStyle from "../atoms/GlobalStyle"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Page title="nightdrops">
        Hi! I am Carlo and I have an addiction to the web.
        <br />
        If you are wondering about my work, you can poke around ;-)
      </Page>
    </>
  )
}
