import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { Modal } from "../../common/components/Modal/Modal";
import { CreationButton } from "../../common/components/CreationButton/CreationButton";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";


CreationButton
export function Clients() {
  const  [open, setOpen] = useState(false);

  return (
    <Container>
      <SideBar />
      <div className="body-container">
        <div className="head-container">
          <InputSearch $searchFor={"clientes"} />
          <NewClientButton onClick={() => setOpen(true)} >
            Criar
            <FiPlus />
          </NewClientButton>
          <Modal isOpen={open} setIsOpen={setOpen} >
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
            <p>Modal</p>
          </Modal>
        </div>
        <Main>
          <QueryResultsTable
            fields={[
              "#",
              "Nome",
              "Contato",
              "Empresa",
              "Criação",
              "Status",
              "Administrator",
              "",
            ]}
          />
        </Main>
      </div>
    </Container>
  );
}
