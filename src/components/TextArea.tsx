import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputBaseStyles } from "./styles";

const SCTextarea = styled.textarea`
  ${InputBaseStyles}
`;

interface TextFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ onChange, ...rest }, ref) => {
    return (
      <SCTextarea
        ref={ref}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          onChange && onChange(event)
        }
        {...rest}
      />
    );
  }
);

export default TextArea;
