import { useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Modal,
  TextArea,
  TextField,
  Upload,
} from "../../../shared/components";
import { useCardsContext } from "../../CardsContext";
import { Mode } from "../../definitions";
import { useFindCard } from "../../useCards";
import { FormStatus } from "./definitions";
import { useFormChange } from "./useFormChange";
import { useFormSubmit } from "./useFormSubmit";

const ModalCardForm = () => {
  const {
    modalForm: { mode, id },
    initModalForm: initModalFormContext,
  } = useCardsContext();

  const { findCard, card } = useFindCard(id!);

  const { dataForm, handleFormChange, setDataForm } = useFormChange();

  const { handleFormSubmit } = useFormSubmit(dataForm);

  useEffect(() => {
    if (id) {
      findCard();
    }
  }, []);

  useEffect(() => {
    if (card) {
      setDataForm(card.toFormData());
    }
  }, [card]);

  const modeText = mode === Mode.NEW ? FormStatus.CREATE : FormStatus.UPDATE;

  return (
    <Modal
      onClose={() => initModalFormContext!()}
      title={`${modeText} Card`}
      footer={
        <Button type="submit" form="card-form" color="primary">
          {modeText}
        </Button>
      }
    >
      <form id="card-form" onSubmit={handleFormSubmit}>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <TextField
            id="title"
            name="title"
            required
            value={dataForm.title}
            autoFocus
            autoComplete="off"
            onChange={(value) => {
              handleFormChange(value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextArea
            id="description"
            name="description"
            value={dataForm.description}
            required
            autoComplete="off"
            onChange={(value) => {
              handleFormChange(value);
            }}
          />
        </FormControl>
        {mode === Mode.NEW && (
          <FormControl>
            <InputLabel htmlFor="image">Image</InputLabel>
            <Upload
              id="image"
              name="image"
              onChange={(value) => {
                handleFormChange(value);
              }}
            />
          </FormControl>
        )}
      </form>
    </Modal>
  );
};
export default ModalCardForm;
