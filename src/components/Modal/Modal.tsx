import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import {
  SCBody,
  SCOverlay,
  SCContent,
  SCFooter,
  SCHeader,
  SCTitle,
} from "./styles";

interface ModalProps {
  title: string;
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, footer, onClose }: ModalProps) => {
  return createPortal(
    <SCOverlay role="dialog">
      <SCContent onClick={(e) => e.stopPropagation()}>
        <SCHeader>
          <SCTitle>{title}</SCTitle>
          <Button aria-label="Close Modal" onClick={onClose}>X</Button>
        </SCHeader>
        <SCBody>{children}</SCBody>
        <SCFooter>{footer}</SCFooter>
      </SCContent>
    </SCOverlay>,
    document.querySelector("body")!
  );
};

export default Modal;
