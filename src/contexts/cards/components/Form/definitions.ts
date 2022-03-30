export const initialFormState = {
  title: "",
  description: "",
  image: null,
};

export interface FormState {
  title: string;
  description: string;
  image: File | null;
}

export enum FormStatus {
  CREATE = "Create",
  UPDATE = "Update",
}
