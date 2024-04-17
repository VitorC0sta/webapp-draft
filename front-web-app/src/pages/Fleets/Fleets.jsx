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
  BiCar,
  BiPalette,
  BiCube,
  BiEditAlt,
} from "react-icons/bi";
import { Modal } from "../../common/components/Modal/Modal";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import { api } from "../../common/service/api";

export function Fleets() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleColor: "",
    vehicleModel: "",
    vehiclePlate: "",
    idOperation: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/vehicles");
        
        const vehiclesData = response.data?.map( vehicle => {
          const {
            id,
            vehicleName,
            vehicleColor,
            vehicleModel,
            vehiclePlate,
            active,
          } = vehicle;
          
          return {
            id,
            vehicleName,
            vehicleColor,
            vehicleModel,
            vehiclePlate,
            active
          };
        });
        

        setData(vehiclesData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return;
  }, []);

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

    console.log({ ...formData });

    await api.post("/vehicles", { ...formData });
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
          title="Adicionar Veículo"
          exists
        >
          <form onSubmit={handleNewClient} className="new-vehicle-form">
            <div className="company-info">
              <Input
                icon={<BiCar />}
                label="Identificação do veículo"
                id="vehicle-name"
                name="vehicleName"
                type="text"
                onChange={handleChange}
                $srOnly
              />
              <div className="flex-row">
                <Input
                  icon={<BiPalette  />}
                  label="Cor"
                  id="vehicle-color"
                  name="vehicleColor"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiCube />}
                  label="Modelo"
                  id="vehicle-model"
                  name="vehicleModel"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
              </div>
              <div className="flex-row">
                <Input
                  icon={<BiEditAlt />}
                  label="Placa de identificação"
                  id="vehicle-plate"
                  name="vehiclePlate"
                  type="text"
                  onChange={handleChange}
                  $srOnly
                />
                <Input
                  icon={<BiBarcodeReader />}
                  label="Id da operação"
                  id="id-operation"
                  name="idOperation"
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
              <h2>Frotas</h2>
              <CreateButton onClick={() => setOpen(true)}>
                <FiPlus />
                <p>Criar Veículo</p>
              </CreateButton>
            </ContentHeader>
            <ContentBody>
              <QueryResultsTable
                fields={[
                  "ID",
                  "Identificação",
                  "Cor",
                  "Modelo",
                  "Placa",
                  "Status",
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
