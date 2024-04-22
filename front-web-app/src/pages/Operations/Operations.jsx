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
  BiBarcodeReader,
  BiPen,
  BiMap,
  BiGlobe,
  BiMapPin,
} from "react-icons/bi";
import { Modal } from "../../common/components/Modal/Modal";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import { api } from "../../common/service/api";
import { format } from "date-fns";

export function Operations() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    operationName: "",
    destinationCity: "",
    destinationRegion: "",
    destinationCountry: "",
    idClient: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/operation?search=${search}`);

        console.log(response);

        const operationsData = response.data?.map((operation) => {

          const { dbaName } = operation.Client;

          const {
            id,
            operationName,
            destinationCity,
            destinationRegion,
            destinationCountry,
            active,
            createdAt
          } = operation;

          return {
            id,
            operationName,
            destination: {
              destinationCity,
              destinationRegion,
            },
            destinationCountry,
            createdAt: format(createdAt, "MM/dd/yyyy - hh:mm aa"),
            active,
            dbaName
          };
        });

        setData(operationsData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return;
  }, [search]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  }

  async function handleNewClient(event) {
    event.preventDefault();

    setOpen(false);


    await api.post("/operation", { ...formData });
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
          title="Nova Operação"
          exists
        >
          <form onSubmit={handleNewClient} className="new-vehicle-form">
            <div className="company-info">
              <Input
                icon={<BiPen />}
                label="Nome da operação"
                id="operation-name"
                name="operationName"
                type="text"
                onChange={handleChange}
                $srOnly
              />
              <div className="flex-row">
                <Input
                  icon={<BiMapPin />}
                  label="Cidade de destino"
                  id="destination-city"
                  name="destinationCity"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiMap />}
                  label="Região"
                  id="destination-region"
                  name="destinationRegion"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
              </div>
              <div className="flex-row">
                <Input
                  icon={<BiGlobe />}
                  label="Pais de destino"
                  id="destination-country"
                  name="destinationCountry"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiBarcodeReader />}
                  label="Id do Cliente"
                  id="id-client"
                  name="idClient"
                  type="text"
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
              <h2>Operações</h2>
              <CreateButton onClick={() => setOpen(true)}>
                <FiPlus />
                <p>Criar Operação</p>
              </CreateButton>
            </ContentHeader>
            <ContentBody>
              <QueryResultsTable
                fields={[
                  "ID",
                  "Operação",
                  "Destino",
                  "País",
                  "Criação",
                  "Status",
                  "Empresa"
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
