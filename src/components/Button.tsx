import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type colors = "primary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  color?: colors;
}

export const Button = styled.button<ButtonProps>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  width: ${(props) => (props.block ? "100%" : "auto")};
  padding: 0.6em 0.5rem;
  background: white;
  color: var(--z0-color);
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  height: fit-content;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  ${(props) =>
    props.color === "primary" &&
    css`
      background: var(--primary-color);
      color: var(--z0-color);
    `};

  ${(props) =>
    props.color === "danger" &&
    css`
      background: var(--danger-color);
      color: white;
    `};
`;

interface ButtonProps {
  color?: colors;
  block?: boolean;
}

export default Button;
