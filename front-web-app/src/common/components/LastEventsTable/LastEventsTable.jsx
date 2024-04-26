import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../service/api";

export function LastEventsTable({ ...rest }) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/events/last_events");

      // const lastEvents = response.data?.map(event => {

      //   const { eventName } = event;
      //   const { vehiclePlate } = event.Vehicle;

      //   return { eventName, vehiclePlate };
      // });

      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container {...rest}>
      <div className="wrap-title">
        <h2>Últimos eventos</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Placa</th>
          </tr>
        </thead>
        <tbody id="tabela-body">
          {data?.map((lastEvent, index) => (
            <tr key={index}>
              <td>{lastEvent.eventName}</td>
              <td>{lastEvent.Vehicle.vehiclePlate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
