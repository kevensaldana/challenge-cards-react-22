import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface UploadFile {
  file: File | null;
  name: string;
}

interface UploadProps {
  onChange: (e: UploadFile) => void;
  name: string;
  id?: string;
}

const SCInput = styled.input`
  width: 100%;
`;

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ onChange, name, id }, ref) => {
    return (
      <SCInput
        id={id}
        type="file"
        name={name}
        ref={ref}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange &&
            onChange({
              file: e.target.files?.length ? e.target.files[0] : null,
              name,
            });
        }}
      />
    );
  }
);

export default Upload;
