import { Container, Main, NewClientButton } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(import.meta.env.VITE_API_URL + "admin/clients");

        const clientData = response.data?.map((client) => {
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
            active,
            id,
            city,
            companyId,
            contact: {
              email: companyEmail,
              phoneNumber: companyPhone,
            },
            country,
            dbaName,
            postalCode,
          };
        });

        setData(clientData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();

    return;
  }, []);

  function handleFormChange(event) {
    const { id, value } = event.target;

    setFormData( prevState => ({
      ...prevState,
      [id]: value,
    }));

    console.log(formData)
  }

  async function handleNewClient(event) {
    event.preventDefault();

    return await api.post(import.meta.env.VITE_API_URL + "client/register");
  }

  return (
    <Container>
      <SideBar />
      <div className="body-container">
        <div className="head-container">
          <InputSearch $searchFor={"clientes"} />
          <NewClientButton onClick={() => setOpen(true)}>
            Criar
            <FiPlus />
          </NewClientButton>
          <Modal isOpen={open} setIsOpen={setOpen}>
            <form action="submit">
              <div className="company-info">
                <h2>Informações da Empresa</h2>
                <Input label="Razão social " id="legalName" type="text" onChange={handleFormChange}/>
                <Input label="Nome fantasia" id="dbaName" type="text" onChange={handleFormChange}/>
                <Input label="CNPJ" id="companyId" type="text" onChange={handleFormChange}/>
              </div>
              <div className="address-details">
                <h2>Endereços</h2>
                <Input label="CEP" id="postalCode" type="text" onChange={handleFormChange}/>
                <Input label="Endereço" id="address" type="text" onChange={handleFormChange}/>
                <Input label="Cidade" id="city" type="text" onChange={handleFormChange}/>
                <div className="country-info">
                  <Input label="Estado" id="state" type="text" onChange={handleFormChange}/>
                  <Input label="País" id="country" type="text" onChange={handleFormChange}/>
                </div>
              </div>
              <div className="contact-detail">
                <h2>Contato</h2>
                <div className="contact-info">
                  <Input label="Telefone" id="companyPhone" type="text" onChange={handleFormChange}/>
                  <Input label="Email da companhia" id="companyEmail" type="email" onChange={handleFormChange}/>
                </div>
              </div>
              <Button type="submit" title="Enviar" onClick={handleNewClient}/>
            </form>
          </Modal>
        </div>
        <Main>
          <QueryResultsTable
            fields={[
              "#",
              "Nome",
              "Idenficação Fiscal",
              "Contato",
              "Código Postal",
              "Cidade",
              "Pais",
              "Status",
              "",
            ]}
            data={data}
          />
        </Main>
      </div>
    </Container>
  );
}
