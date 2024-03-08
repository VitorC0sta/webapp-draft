import { Container, ModalContent } from "./styles";
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
