import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Modal } from "../../common/components/Modal/Modal";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";

export function Operations() {
  const [open, setOpen] = useState(false);


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
              <div className="operation-info">
                <h2>Informações</h2>
                <Input label="Nome da operação" id="operation-name" type="text" />
                <Input label="Id do cliente" id="client-id" type="text" />
              </div>
              <div className="destiny-details">
                <h2>Endereço de Destino</h2>
                <Input label="CEP" id="postal-code" type="text" />
                <Input label="Endereço" id="company-address" type="text" />
                <Input label="Cidade" id="company-city" type="text" />
                <div className="country-info">
                  <Input label="Estado" id="company-state" type="text" />
                  <Input label="País" id="company-country" type="text" />
                </div>
              </div>
              <Button type="submit" title="Enviar" />
            </form>
          </Modal>
        </div>
        <Main>
          <QueryResultsTable
            fields={[
              "#",
              "Operação",
              "Destino",
              "Código postal",
              "Criação",
              "Status",
            ]}
          />
        </Main>
      </div>
    </Container>
  );
}
