import React, { ChangeEvent, ReactNode, SelectHTMLAttributes } from "react";
import styled from "styled-components";

const SCSelect = styled.select`
  border: none;
`;

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ onChange, children, ...rest }, ref) => {
    return (
      <SCSelect
        ref={ref}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onChange && onChange(event)
        }
        {...rest}
      >
        {children}
      </SCSelect>
    );
  }
);

export default Select;
