import { ChangeEvent, forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface UploadFile {
  file: File | null;
  name: string;
}

interface UploadProps {
  onChange: (e: UploadFile) => void;
  hasPreview?: boolean;
  name: string;
  id?: string;
}

const SCInput = styled.input`
  width: 100%;
`;

const SCImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-top: 0.7rem;
`;

const Upload = forwardRef<HTMLInputElement, UploadProps>(
  ({ onChange, name, id, hasPreview = true }, ref) => {
    const [file, setFile] = useState<File | null>(null);
    const refImage = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      if (file && refImage.current) {
        refImage.current.src = URL.createObjectURL(file);
      }
    }, [file]);

    return (
      <>
        <SCInput
          id={id}
          type="file"
          name={name}
          ref={ref}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.length ? e.target.files[0] : null;
            setFile(file);
            onChange &&
              onChange({
                file,
                name,
              });
          }}
        />
        {hasPreview && file && <SCImage ref={refImage} />}
      </>
    );
  }
);

export default Upload;
