import styled from "styled-components";
import { device } from "../../theme";

export const SCContainer = styled.div`
  max-width: 90%;
  margin: 2rem auto;
  @media ${device.laptop} {
    max-width: 45rem;
  }
`;

export const SCHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCTitle = styled.h1`
  font-size: 2rem;
`;
