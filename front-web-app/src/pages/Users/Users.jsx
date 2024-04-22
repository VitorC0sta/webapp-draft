import {
  Container,
  ContentArea,
  Main,
  Content,
  ContentHeader,
  ContentBody,
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
import { format } from "date-fns";
import {
  BiUser,
  BiEnvelope,
  BiIdCard,
  BiCalendar,
  BiUserCircle,
  BiMapPin,
  BiHomeAlt,
  BiMapAlt,
  BiMap,
  BiWorld,
  BiMobileAlt,
  BiBriefcase,
} from "react-icons/bi";

export function Users() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`admin/users?search=${search}`);

        const usersData = response.data?.map((userData) => {
          const {
            id,
            name,
            phoneNumber,
            email,
            createdAt,
            administrator,
            active,
          } = userData;

          return {
            id,
            name,
            contact: {
              phoneNumber,
              email,
            },
            createdAt: format(createdAt, "MM/dd/yyyy - hh:mm aa"),
            active,
            administrator,
          };
        });

        setData(usersData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();

    return;
  }, [search]);

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header setSearch={setSearch}/>
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          className="modal"
          title="Criar Usuário"
          exists
        >
          <form className="new-user-form">
            <div className="user-info">
              <h3>Informações pessoais</h3>
              <Input label="Nome" id="name" type="text" $srOnly icon={<BiUser/>}/>
              <div className="flex-row">
                <Input
                  label="Data de Nascimento"
                  id="birthdate"
                  type="text"
                  $srOnly
                  icon={<BiCalendar/>}
                />
                <Input label="CPF" id="nationalIdNumber" type="text" $srOnly icon={<BiIdCard/>}/>
              </div>
            </div>
            <div className="address-details">
              <h3>Endereço</h3>
              <Input label="Endereço" id="userAddress" type="text" $srOnly icon={<BiHomeAlt />}/>
              <div className="flex-row">
                <Input label="CEP" id="postalCode" type="text" $srOnly icon={<BiMapPin />}/>
                <Input label="Cidade" id="userCity" type="text" $srOnly icon={<BiMap />}/>
              </div>

              <div className="flex-row">
                <Input label="Estado" id="userState" type="text" $srOnly icon={<BiMapAlt />}/>
                <Input label="País" id="userCountry" type="text" $srOnly icon={<BiWorld />}/>
              </div>
            </div>
            <div className="account-info">
              <h3>Informações da conta</h3>
              <div className="flex-row">
                <div className="checkbox-wrap">
                  <div className="flex-row">
                    <label htmlFor="administrator">Administrador</label>
                    <input
                      type="checkbox"
                      name="userAdmin"
                      id="administrator"
                    />
                  </div>
                </div>
                <Input
                  label="Id da empresa"
                  id="idClient"
                  type="text"
                  $srOnly
                  icon={<BiUserCircle />}
                />
                <Input label="Cargo" id="companyRole" type="text" $srOnly icon={<BiBriefcase />}/>
              </div>
            </div>
            <div className="contact-detail">
              <h3>Contato</h3>
              <div className="flex-row">
                <Input label="Telefone" id="phoneNumber" type="text" $srOnly icon={<BiMobileAlt />}/>
                <Input label="Email" id="mail" type="email" $srOnly icon={<BiEnvelope />}/>
              </div>
            </div>
            <section className="handle-buttons">
              <Button title="Limpar" width="8rem" />
              <Button title="Enviar" $typeSubmit width="8rem" />
            </section>
          </form>
        </Modal>
        <Main>
          <Content>
            <ContentHeader>
              <h2>Usuários</h2>
              <CreateButton onClick={() => setOpen(true)}>
                <FiPlus />
                <p>Criar Usuário</p>
              </CreateButton>
            </ContentHeader>
            <ContentBody>
              <QueryResultsTable
                fields={[
                  "ID",
                  "Nome",
                  "Contato",
                  "Criação",
                  "Status",
                  "Administrator",
                ]}
                data={data}
              />
            </ContentBody>
          </Content>
        </Main>
      </ContentArea>
    </Container>
  );
}
