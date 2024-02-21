import { Container } from "./styles";

export function LastEventsTable({...rest}) {
  return (
    <Container {...rest}>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody id="tabela-body">
          <tr>
            <td>ABC1234</td>
            <td>Alcoolizado</td>
          </tr>
          <tr>
            <td>XYZ5678</td>
            <td>Sonolência</td>
          </tr>
          <tr>
            <td>DEF9876</td>
            <td>Direção Perigosa</td>
          </tr>
          <tr>
            <td>GHI6543</td>
            <td>Sem Cinto</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
