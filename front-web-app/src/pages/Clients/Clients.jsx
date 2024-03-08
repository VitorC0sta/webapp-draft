import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { Modal } from "../../common/components/Modal/Modal";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";

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
            <form action="submit">
              <div className="company-info">
                <h2>Informações da Empresa</h2>
                <Input label="Razão social " id="legal-name" type="text"/>
                <Input label="Nome fantasia" id="dba-name" type="text"/>
                <Input label="CNPJ" id="company-id" type="text"/>      
              </div>
              <div className="address-details">
                <h2>Endereços</h2>
                <Input label="CEP" id="postal-code" type="text"/>
                <Input label="Endereço" id="company-address" type="text"/>
                <Input label="Cidade" id="company-city" type="text"/>
                <div className="country-info">
                  <Input label="Estado" id="company-state" type="text"/>
                  <Input label="País" id="company-country" type="text"/>
                </div>
              </div>
              <div className="contact-detail">
                <h2>Contato</h2>
                <div className="contact-info">
                  <Input label="Telefone" id="contact-number" type="text"/>
                  <Input label="Email da companhia" id="company-email" type="email"/>
                </div>
              </div>
              <Button type="submit" title="Enviar"/>
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
