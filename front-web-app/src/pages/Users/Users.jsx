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
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Users() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationalIdNumber: "",
    administrator: false,
    idClient: "",
    postalCode: "",
    userAddress: "",
    userCity: "",
    userState: "",
    userCountry: "",
    phoneNumber: "",
    birthdate: "",
    companyRole: "",
  });

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

  async function handleNewClient(event) {
    event.preventDefault();

    setOpen(false);


    try {
      await api.post("user/", { ...formData });
    } catch (err) {
      toast("Não foi possível criar o usuário");
    }
  }

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header setSearch={setSearch} />
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          className="modal"
          title="Criar Usuário"
          exists
        >
          <ToastContainer/>
          <form className="new-user-form" onSubmit={handleNewClient}>
            <div className="user-info">
              <h3>Informações pessoais</h3>
              <Input
                label="Nome"
                id="name"
                name="name"
                type="text"
                $srOnly
                icon={<BiUser />}
                onChange={event => setFormData({...formData, name: event.target.value})}
              />
              <div className="flex-row">
                <Input
                  label="Data de Nascimento"
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  $srOnly
                  icon={<BiCalendar />}
                  onChange={event => setFormData({...formData, birthdate: event.target.value})}
                />
                <Input
                  label="CPF"
                  id="nationalIdNumber"
                  name="nationalIdNumber"
                  type="text"
                  $srOnly
                  icon={<BiIdCard />}
                  onChange={event => setFormData({...formData, nationalIdNumber: event.target.value.replace(/\D/g, "")})}
                />
              </div>
            </div>
            <div className="address-details">
              <h3>Endereço</h3>
              <Input
                label="Endereço"
                id="userAddress"
                name="userAddress"
                type="text"
                $srOnly
                icon={<BiHomeAlt />}
                onChange={event => setFormData({...formData, userAddress: event.target.value})}
              />
              <div className="flex-row">
                <Input
                  label="CEP"
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  $srOnly
                  icon={<BiMapPin />}
                  onChange={event => setFormData({...formData, postalCode: event.target.value})}
                />
                <Input
                  label="Cidade"
                  id="userCity"
                  name="userCity"
                  type="text"
                  $srOnly
                  icon={<BiMap />}
                  onChange={event => setFormData({...formData, userCity: event.target.value})}
                />
              </div>

              <div className="flex-row">
                <Input
                  label="Estado"
                  id="userState"
                  name="userState"
                  type="text"
                  $srOnly
                  icon={<BiMapAlt />}
                  onChange={event => setFormData({...formData, userState: event.target.value})}
                />
                <Input
                  label="País"
                  id="userCountry"
                  name="userCountry"
                  type="text"
                  $srOnly
                  icon={<BiWorld />}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      userCountry: event.target.value,
                    })
                  }
                />
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
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          administrator: event.target.checked,
                        })
                      }
                    />
                  </div>
                </div>
                <Input
                  label="Id da empresa"
                  id="idClient"
                  name="idClient"
                  type="text"
                  $srOnly
                  icon={<BiUserCircle />}
                  onChange={event => setFormData({...formData, idClient: event.target.value.replace(/\D/g, "")})}
                />
                <Input
                  label="Cargo"
                  id="companyRole"
                  name="companyRole"
                  type="text"
                  icon={<BiBriefcase />}
                  $srOnly
                  onChange={event => setFormData({...formData, companyRole: event.target.value})}
                />
              </div>
            </div>
            <div className="contact-detail">
              <h3>Contato</h3>
              <div className="flex-row">
                <Input
                  label="Telefone"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  $srOnly
                  icon={<BiMobileAlt />}
                  onChange={event => setFormData({...formData, phoneNumber: event.target.value.replace(/\D/g, "")})}
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  $srOnly
                  icon={<BiEnvelope />}
                  onChange={event => setFormData({...formData, email: event.target.value})}
                />
              </div>
            </div>
            <section className="handle-buttons">
              <Button title="Limpar" width="8rem" />
              <Button title="Enviar" type="submit" $typeSubmit width="8rem" />
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
