import { useState } from "react";
import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { Input } from "../../common/components/Input/Input";
import { FiPlus } from "react-icons/fi";
import { Modal } from "../../common/components/Modal/Modal";
import { Button } from "../../common/components/Button/Button";

export function Fleets() {
  const [ open, setOpen] = useState(false);

  return (
    <Container>
      <SideBar />
      <div className="body-container">
      <div className="head-container">
          <InputSearch $searchFor={"usuários"} />
          <NewClientButton onClick={() => setOpen(true)}>
            Criar
            <FiPlus />
          </NewClientButton>
          <Modal isOpen={open} setIsOpen={setOpen} className="modal">
            <form action="submit">
              <div className="vehicle-info">
                <h2>Informações</h2>
                <Input label="Nome do veículo" id="operation-name" type="text" />
                <Input label="Modelo do veículo" id="client-id" type="text" />
                <div className="wrap-row">
                  <Input label="Cor" id="vehicle-color" type="text"/>
                  <Input label="Placa" id="vehicle-plate" type="text"/>
                </div>
                <Input label="Id da operação" id="id-operation" type="text"/>
              </div>
              <Button type="submit" text="Enviar" />
            </form>
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
