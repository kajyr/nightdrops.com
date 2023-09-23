import React, { ReactNode } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Seo from "../atoms/SEO";

const H1 = styled.h1`
  margin: 0 0 1rem 0;
  padding-bottom: 0.3em;
  font-weight: 600;
  line-height: 1.25;
  border-bottom: 1px solid #eaecef;
`;
const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

type Props = {
  title: string;
  back?: string;
  children: ReactNode;
};
export default function Page({ title, back, children }: Props) {
  return (
    <Container>
      <Seo />
      {title && (
        <H1>
          {back && <Link to={back}>{"< "}</Link>}
          <span style={{ marginLeft: !!back ? "0" : "27px" }}>{title}</span>
        </H1>
      )}
      {children}
    </Container>
  );
}
