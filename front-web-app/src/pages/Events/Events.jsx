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
import { format } from "date-fns";

export function Events() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/events");

        const eventsList = response.data?.map((event) => {
          const {
            id,
            eventName,
            createdAt
          } = event;
          
          const { vehiclePlate } = event.Vehicle;
          const { dbaName } = event.Vehicle.Operation.Client;
          
          return {
            id,
            eventName,
            vehiclePlate,
            dbaName,
            createdAt: format(createdAt, "MM/dd/yyyy - hh:mm aa"),
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
  
  useEffect(() => {
    console.log(search);
  },[search]);

  return (
    <Container>
      <SideBar />
      <ContentArea>
        <Header  />
        <Main>
          <Content>
            <ContentHeader>
              <h2>Eventos</h2>
            </ContentHeader>
            <ContentBody>
              <QueryResultsTable
                fields={["ID", "Evento", "Placa", "Cliente", "Horário"]}
                data={data}
              />
            </ContentBody>
          </Content>
        </Main>
      </ContentArea>
    </Container>
  );
}
