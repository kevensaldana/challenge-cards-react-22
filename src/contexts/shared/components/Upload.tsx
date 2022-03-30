import React, { ChangeEvent } from "react";

export interface UploadFile {
  file: File | null;
  name: string;
}

interface UploadProps {
  onChange: (e: UploadFile) => void;
  name: string;
  id?: string;
}

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ onChange, name, id }, ref) => {
    return (
      <input
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
