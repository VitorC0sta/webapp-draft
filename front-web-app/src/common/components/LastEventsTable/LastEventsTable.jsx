import { Container } from "./styles";


export function LastEventsTable({ data, ...rest }) {

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
              <td>{lastEvent.vehiclePlate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
