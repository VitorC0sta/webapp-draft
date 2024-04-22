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
import { Button } from "../../common/components/Button/Button";
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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`admin/clients?search=${search}`);

        const clientsData = response.data?.map((client) => {
          const {
            active,
            city,
            companyEmail,
            companyId,
            companyPhone,
            country,
            dbaName,
            id,
            postalCode,
          } = client;

          return {
            id,
            dbaName,
            companyId,
            contact: {
              email: companyEmail,
              phoneNumber: companyPhone,
            },
            active,
            postalCode,
            city,
            country,
          };
        });

        setData(clientsData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return;
  }, [search]);

  function handleChange(event) {
    const { id, value } = event.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  async function handleNewClient(event) {
    event.preventDefault();
    
    setOpen(false);
    
    console.log({...formData});

    await api.post("client/register", { ...formData });
  }

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header setSearch={setSearch}/>
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          className="modal"
          title="Adicionar Cliente"
          exists
        >
          <form onSubmit={handleNewClient} className="new-client-form">
            <div className="company-info">
                <h3>Informações da empresa</h3>
                <Input
                  icon={<BiBriefcaseAlt2 />}
                  label="Razão social "
                  id="legalName"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <div className="flex-row">
                  <Input
                    icon={<BiPen />}
                    label="Título"
                    id="dbaName"
                    type="text"
                    onChange={handleChange}
                    $srOnly
                  />
                  <Input
                    icon={<BiIdCard />}
                    label="CNPJ"
                    id="companyId"
                    type="text"
                    onChange={handleChange}
                    $srOnly
                  />
                </div>
            </div>
            <div className="address-details">
              <h3>Endereços</h3>
              <Input
                icon={<BiMap />}
                label="Endereço"
                id="address"
                type="text"
                onChange={handleChange}
                $srOnly
              />
              <div className="flex-row">
                <Input
                  icon={<BiEnvelope />}
                  label="CEP"
                  id="postalCode"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiMapPin />}
                  label="Cidade"
                  id="city"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
              </div>

              <div className="flex-row">
                <Input
                  icon={<BiFlag />}
                  label="Estado"
                  id="state"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiGlobe />}
                  label="País"
                  id="country"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
              </div>
            </div>
            <div className="contact-detail">
              <h3>Contatos</h3>
              <div className="flex-row">
                <Input
                  icon={<BiMobileAlt />}
                  label="Telefone"
                  id="companyPhone"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiMailSend />}
                  label="Email da companhia"
                  id="companyEmail"
                  type="email"
                  onChange={handleChange}
                  $srOnly
                />
              </div>
            </div>
            <section className="handle-buttons">
              <Button title="Limpar" width="15rem" />
              <Button title="Enviar" $typeSubmit width="15rem" />
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
            <ContentBody>
              <QueryResultsTable
                fields={[
                  "Id",
                  "Nome",
                  "Idenficação Fiscal",
                  "Contato",
                  "Status",
                  "Código Postal",
                  "Cidade",
                  "Pais",
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
