import { css } from "styled-components";

export const InputBaseStyles = css`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid var(--z0-color);
  &:focus {
    outline: none;
    border: 2px solid var(--accent-color);
  }
`;
