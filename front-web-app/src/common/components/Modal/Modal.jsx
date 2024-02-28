import { Container, ModalContent } from "./styles";
import { PropTypes } from "prop-types";
import { IoIosClose } from "react-icons/io";

export function Modal({ children, isOpen, setIsOpen }) {
  

  return <>{
    isOpen && 
    <Container isOpen>
      <ModalContent>
      <div className="wrap-closebutton">
        <IoIosClose className="close-modal" onClick={() => setIsOpen(!isOpen)}/>
      </div>
        {children}
      </ModalContent>
    </Container>
    }
    </>;
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.func,
  setIsOpen: PropTypes.func,
};
