import styled from "styled-components";

export const SCOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const SCContent = styled.div`
  width: 20rem;
  background: white;
  color: var(--z0-color);
`;

export const SCHeader = styled.div`
  padding: 1rem;
  text-align: center;
  position: relative;
  & > button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

export const SCTitle = styled.h4`
  margin: 0;
  text-transform: uppercase;
`;

export const SCBody = styled.div`
  padding: 1rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const SCFooter = styled.div`
  padding: 1rem;
  text-align: center;
`;
