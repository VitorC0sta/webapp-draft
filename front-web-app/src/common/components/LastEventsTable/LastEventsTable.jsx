import { Container } from "./styles";

export function LastEventsTable({...rest}) {
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
          <tr>
            <td>Alcoolizado</td>
            <td>ABC1234</td>
          </tr>
          <tr>
            <td>Sonolência</td>
            <td>XYZ5678</td>
          </tr>
          <tr>
            <td>Direção Perigosa</td>
            <td>DEF9876</td>
          </tr>
          <tr>
            <td>Sem Cinto</td>
            <td>GHI6543</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}
