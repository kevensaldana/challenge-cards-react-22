import { ChangeEvent, useEffect, useState } from "react";
import { UploadFile } from "../../../shared/components";
import { FormState, initialFormState } from "./definitions";

export function useFormChange() {
  const [dataForm, setDataForm] = useState<FormState>(initialFormState);

  const handleFormChange = (
    event:
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLInputElement>
      | UploadFile
  ) => {
    if ("file" in event) {
      setDataForm({
        ...dataForm,
        [event.name!]: event.file,
      });

      return;
    }

    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return { dataForm, handleFormChange, setDataForm };
}
