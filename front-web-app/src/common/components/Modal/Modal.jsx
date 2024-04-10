import { Container, ModalContent, ModalContainer } from "./styles";
import { IoIosClose } from "react-icons/io";
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

export function Modal({ children, isOpen, setIsOpen, title }) {
  return (
    <>
      {isOpen && (
        <Container>
          <ModalContainer>
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
            </ModalContent>
          </ModalContainer>
        </Container>
      )}
    </>
  );
}
