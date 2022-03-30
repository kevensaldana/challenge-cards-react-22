import { ReactNode, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
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
  return ReactDOM.createPortal(
    <SCOverlay>
      <SCContent onClick={(e) => e.stopPropagation()}>
        <SCHeader>
          <SCTitle>{title}</SCTitle>
          <Button onClick={onClose}>X</Button>
        </SCHeader>
        <SCBody>{children}</SCBody>
        <SCFooter>{footer}</SCFooter>
      </SCContent>
    </SCOverlay>,
    document.getElementById("root")!
  );
};

export default Modal;
