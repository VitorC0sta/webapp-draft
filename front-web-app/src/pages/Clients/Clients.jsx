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
import {
  BiMailSend,
  BiBriefcaseAlt2,
  BiPen,
  BiIdCard,
  BiMap,
  BiEnvelope,
  BiMapPin,
  BiFlag,
  BiGlobe,
  BiMobileAlt,
} from "react-icons/bi";
import { Modal } from "../../common/components/Modal/Modal";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../common/components/Input/Input";
import { api } from "../../common/service/api";

export function Clients() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    companyEmail: "",
    companyId: "",
    companyPhone: "",
    country: "",
    dbaName: "",
    legalName: "",
    postalCode: "",
    state: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("admin/clients");

  //       const clientData = response.data?.map((client) => {
  //         const {
  //           active,
  //           city,
  //           companyEmail,
  //           companyId,
  //           companyPhone,
  //           country,
  //           dbaName,
  //           id,
  //           postalCode,
  //         } = client;

  //         return {
  //           id,
  //           dbaName,
  //           companyId,
  //           contact: {
  //             email: companyEmail,
  //             phoneNumber: companyPhone,
  //           },
  //           postalCode,
  //           city,
  //           country,
  //           active,
  //         };
  //       });

  //       setData(clientData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();

  //   return;
  // }, []);

  function handleFormChange(event) {
    const { id, value } = event.target;
    console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    console.log(formData);
  }

  async function handleNewClient(event) {
    event.preventDefault();
    setOpen(false);
    return await api.post("client/register", { ...formData });
  }

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header />
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          className="modal"
          title="Adicionar Cliente"
          exists
        >
          <form action="submit" className="new-client-form">
            <div className="company-info">
              <div className="flex-row">
                <Input
                  icon={<BiBriefcaseAlt2 />}
                  label="Razão social "
                  id="legalName"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
                <div className="flex-row">
                  <Input
                    icon={<BiPen />}
                    label="Título"
                    id="dbaName"
                    type="text"
                    onChange={handleFormChange}
                    $srOnly
                  />
                  <Input
                    icon={<BiIdCard />}
                    label="CNPJ"
                    id="companyId"
                    type="text"
                    onChange={handleFormChange}
                    $srOnly
                  />
                </div>
              </div>
            </div>
            <div className="address-details">
              <Input
                icon={<BiMap />}
                label="Endereço"
                id="address"
                type="text"
                onChange={handleFormChange}
                $srOnly
              />
              <div className="flex-row">
                <Input
                  icon={<BiEnvelope />}
                  label="CEP"
                  id="postalCode"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
                <Input
                  icon={<BiMapPin />}
                  label="Cidade"
                  id="city"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
              </div>

              <div className="flex-row">
                <Input
                  icon={<BiFlag />}
                  label="Estado"
                  id="state"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
                <Input
                  icon={<BiGlobe />}
                  label="País"
                  id="country"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
              </div>
            </div>
            <div className="contact-detail">
              <div className="flex-row">
                <Input
                  icon={<BiMobileAlt />}
                  label="Telefone"
                  id="companyPhone"
                  type="text"
                  onChange={handleFormChange}
                  $srOnly
                />
                <Input
                  icon={<BiMailSend />}
                  label="Email da companhia"
                  id="companyEmail"
                  type="email"
                  onChange={handleFormChange}
                  $srOnly
                />
              </div>
            </div>
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
                "Idenficação Fiscal",
                "Código Postal",
                "Cidade",
                "Pais",
              ]}
            />
          </Content>
        </Main>
      </ContentArea>
    </Container>
  );
}
