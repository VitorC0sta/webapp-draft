import { Container, ContentArea, Main } from "./styles";
import { Header } from "../../common/components/Header/Header";
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
        const response = await api.get("admin/clients");

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
            id,
            dbaName,
            companyId,
            contact: {
              email: companyEmail,
              phoneNumber: companyPhone,
            },
            postalCode,
            city,
            country,
            active,
          };
        });

        setData(clientData);
      } catch (err) {
        console.log(err);
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
    setOpen(false);
    return await api.post("client/register", {...formData});
  }

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header />
        <Main />
      </ContentArea>
    </Container>
  );
}
