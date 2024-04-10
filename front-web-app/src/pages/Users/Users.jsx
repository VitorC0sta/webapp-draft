import {
  Container,
  ContentArea,
  Main,
  Content,
  ContentHeader,
  CreateButton,
} from "./styles";
import { Header } from "../../common/components/Header/Header";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Modal } from "../../common/components/Modal/Modal";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import { api } from "../../common/service/api";

export function Users() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          import.meta.env.VITE_API_URL + "admin/users"
        );

        const usersData = response.data?.map( userData => {
          const { id, name, phone, email } = userData;

          
        });

        //setData(usersData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();

    return;
  }, []);
  // return (
  //   <Container>
  //     <SideBar />
  //     <div className="body-container">
  //       <div className="head-container">
  //         <InputSearch $searchFor={"usuários"} />
  //         <NewClientButton onClick={() => setOpen(true)}>
  //           Criar
  //           <FiPlus />
  //         </NewClientButton>
  //         <Modal isOpen={open} setIsOpen={setOpen} className="modal">
  //           <form action="submit">
  //             <div className="user-info">
  //               <h2>Informações do usuário</h2>
  //               <div className="complete-name">
  //                 <Input label="Nome" id="new-user-id" type="text" />
  //                 <Input label="Sobrenome" id="user-surname" type="text" />
  //               </div>
  //               <Input label="CPF" id="national-id-number" type="text" />
  //               <div className="row-wrap">
  //                 <Input label="Nascimento" id="user-born" type="text" />
  //                 <fieldset>
  //                   <legend>Privilégios</legend>
  //                   <div className="wrap-is-administrator">
  //                     <input
  //                       type="checkbox"
  //                       name="admin-rules"
  //                       id="check-is-admin"
  //                       value="administrator"
  //                     />
  //                     <label htmlFor="check-is-admin">Admin</label>
  //                   </div>
  //                 </fieldset>
  //               </div>
  //             </div>
  //             <div className="address-details">
  //               <h2>Endereço</h2>
  //               <Input label="CEP" id="postal-code" type="text" />
  //               <Input label="Endereço" id="company-address" type="text" />
  //               <Input label="Cidade" id="company-city" type="text" />
  //               <div className="country-info">
  //                 <Input label="Estado" id="company-state" type="text" />
  //                 <Input label="País" id="company-country" type="text" />
  //               </div>
  //             </div>
  //             <div className="contact-detail">
  //               <h2>Contato</h2>
  //               <div className="contact-info">
  //                 <Input label="Telefone" id="contact-number" type="text" />
  //                 <Input
  //                   label="Email da companhia"
  //                   id="company-email"
  //                   type="email"
  //                 />
  //               </div>
  //             </div>
  //             <Button type="submit" title="Enviar" />
  //           </form>
  //         </Modal>
  //       </div>
  //       <Main>
  //         <QueryResultsTable
  //           fields={[
  //             "#",
  //             "Nome",
  //             "Contato",
  //             "Empresa",
  //             "Criação",
  //             "Status",
  //             "Administrator",
  //             "",
  //           ]}
  //           data={data}
  //         />
  //       </Main>
  //     </div>
  //   </Container>
  // );
  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header />
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          className="modal"
          title="Criar Usuário"
          exists
        >
          <form className="new-user-form">
            <div className="company-info">
              <div className="flex-row">
                <Input
                  label="Razão social "
                  id="legalName"
                  type="text"
                  $srOnly
                />
                <div className="flex-row">
                  <Input label="Título" id="dbaName" type="text" $srOnly />
                  <Input label="CNPJ" id="companyId" type="text" $srOnly />
                </div>
              </div>
            </div>
            <div className="address-details">
              <Input label="Endereço" id="address" type="text" $srOnly />
              <div className="flex-row">
                <Input label="CEP" id="postalCode" type="text" $srOnly />
                <Input label="Cidade" id="city" type="text" $srOnly />
              </div>

              <div className="flex-row">
                <Input label="Estado" id="state" type="text" $srOnly />
                <Input label="País" id="country" type="text" $srOnly />
              </div>
            </div>
            <div className="contact-detail">
              <div className="flex-row">
                <Input label="Telefone" id="companyPhone" type="text" $srOnly />
                <Input
                  label="Email da companhia"
                  id="companyEmail"
                  type="email"
                  $srOnly
                />
              </div>
            </div>
            <section className="handle-buttons">
              <Button text="Limpar" width="8rem" />
              <Button text="Enviar" $typeSubmit width="8rem" />
            </section>
          </form>
        </Modal>
        <Main>
          <Content>
            <ContentHeader>
              <h2>Clientes</h2>
              <CreateButton onClick={() => setOpen(true)}>
                <FiPlus />
                <p>Criar Cliente</p>
              </CreateButton>
            </ContentHeader>
            <QueryResultsTable
              fields={[
                "Id",
                "Nome",
                "Contato",
                "Empresa",
                "Criação",
                "Status",
                "Administrator",
              ]}
              data={data}
            />
          </Content>
        </Main>
      </ContentArea>
    </Container>
  );
}
