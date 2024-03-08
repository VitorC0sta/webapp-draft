import { useState } from "react";
import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { FiPlus } from "react-icons/fi";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { Modal } from "../../common/components/Modal/Modal";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";

export function Users() {
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
              <div className="user-info">
                <h2>Informações do usuário</h2>
                <div className="complete-name">
                  <Input label="Nome" id="new-user-id" type="text" />
                  <Input label="Sobrenome" id="user-surname" type="text" />
                </div>
                <Input label="CPF" id="national-id-number" type="text" />
                <div className="row-wrap">
                  <Input label="Nascimento" id="user-born" type="text" />
                  <fieldset>
                    <legend>Privilégios</legend>
                    <div className="wrap-is-administrator">
                      <input
                        type="checkbox"
                        name="admin-rules"
                        id="check-is-admin"
                        value="administrator"
                      />
                      <label htmlFor="check-is-admin">Admin</label>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="address-details">
                <h2>Endereço</h2>
                <Input label="CEP" id="postal-code" type="text" />
                <Input label="Endereço" id="company-address" type="text" />
                <Input label="Cidade" id="company-city" type="text" />
                <div className="country-info">
                  <Input label="Estado" id="company-state" type="text" />
                  <Input label="País" id="company-country" type="text" />
                </div>
              </div>
              <div className="contact-detail">
                <h2>Contato</h2>
                <div className="contact-info">
                  <Input label="Telefone" id="contact-number" type="text" />
                  <Input
                    label="Email da companhia"
                    id="company-email"
                    type="email"
                  />
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
