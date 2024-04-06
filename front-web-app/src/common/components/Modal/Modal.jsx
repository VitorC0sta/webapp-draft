import { Container, ModalContent } from "./styles";
import { IoIosClose } from "react-icons/io";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button } from "../Button/Button";

import 'react-perfect-scrollbar/dist/css/styles.css';

export function Modal({ children, isOpen, setIsOpen, title, exists }) {
  return (
    <>
      {isOpen && (
        <Container>
          <ModalContent>
            <div className="modal-header">
              <h2>{title}</h2>
              <IoIosClose
                className="close-modal" 
                onClick={() => setIsOpen(false)}
              />
            </div>
            <PerfectScrollbar>
              {children}
            </PerfectScrollbar>
            <section className="handle-buttons">
              {exists ? <Button text="Limpar" width="8rem"/>: ''}
              <Button text="Enviar" $typeSubmit width="8rem"/> 
            </section>
          </ModalContent>
        </Container>
      )}
    </>
  );
}
