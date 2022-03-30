import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputBaseStyles } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const SCTextField = styled.input`
  ${InputBaseStyles}
`;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ onChange, ...rest }, ref) => {
    return (
      <SCTextField
        ref={ref}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
        {...rest}
      />
    );
  }
);

export default TextField;
