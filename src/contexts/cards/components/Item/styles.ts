import styled from "styled-components";
import { device } from "../../../../theme";

export const SCCard = styled.article`
  background-color: var(--z1-color);
  overflow: hidden;
  transition: box-shadow 0.3s;
  display: flex;
`;

export const SCContent = styled.div`
  display: grid;
  padding: 1rem;
`;

export const SCImage = styled.img`
  width: 140px;
  object-fit: cover;
  @media ${device.laptop} {
    width: 210px;
  }
`;

export const SCBody = styled.p`
  word-break: break-word;
`;

export const SCTitle = styled.h3`
  margin: 0;
  word-break: break-word;

`;

export const SCFooter = styled.div`
  & > * {
    margin-right: 0.5rem;
  }
`;
