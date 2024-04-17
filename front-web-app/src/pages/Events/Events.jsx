import {
  Container,
  ContentArea,
  Main,
  Content,
  ContentHeader,
  ContentBody,
} from "./styles";
import { Header } from "../../common/components/Header/Header";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { useEffect, useState } from "react";
import { api } from "../../common/service/api";

export function Events() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/events");

        const eventsList = response.data?.map((event) => {
          const {
            id,
            eventName,
            idVehicle,
            createdAt
          } = event;

          return {
            id,
            eventName,
            idVehicle,
            createdAt
          };
        });

        setData(eventsList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return;
  }, []);

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header />
        <Main>
          <Content>
            <ContentHeader>
              <h2>Eventos</h2>
            </ContentHeader>
            <ContentBody>
              <QueryResultsTable
                fields={["ID", "Evento", "Horário", "Placa"]}
                data={data}
              />
            </ContentBody>
          </Content>
        </Main>
      </ContentArea>
    </Container>
  );
}
