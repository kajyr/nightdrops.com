import React from "react";
import styled from "styled-components";
import { useOutsideClick } from "@radar-ui/use-outside-click";

const Overlay = styled.div`
  background: rgba(11, 11, 11, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 24px auto;
  max-width: 70vw;
  min-width: 50vw;
  display: flex;
  align-items: center;
  pointer-events: none;
  position: relative;
`;

const Lightbox = ({ children, onCloseRequest }) => {
  const ref = useOutsideClick(onCloseRequest);
  return (
    <Overlay>
      <Wrapper>
        <div ref={ref}>{children}</div>
      </Wrapper>
    </Overlay>
  );
};

export default Lightbox;
