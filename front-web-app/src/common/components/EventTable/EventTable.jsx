import { Container } from "./styles";
import { Rect } from "../GeometricShapes/Rect/Rect";
import theme from "../../../styles/theme";

export function EventTable() {

  return (
    <Container>
      <div className="legends">
        <div className="legend">
          <Rect width={30} height={20} color={theme.COLORS.BLUE_500} />
          <span>Sonolência</span>
        </div>
        <div className="legend">
          <Rect width={30} height={20} color={theme.COLORS.RED_500} />
          <span>Alcoolizado</span>
        </div>
        <div className="legend">
          <Rect width={30} height={20} color={theme.COLORS.GREEN_500} />
          <span>Sem cinto</span>
        </div>
        <div className="legend">
          <Rect width={30} height={20} color={theme.COLORS.YELLOW_500} />
          <span>Direção Perigosa</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Evento</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ABC-1234</td>
            <td><Rect width={30} height={20} color={theme.COLORS.BLUE_500} /></td>
            
          </tr>
          <tr>
            <td>XYZ-5678</td>
            <td><Rect width={30} height={20} color={theme.COLORS.RED_500} /></td>
            
            
          </tr>
          <tr>
            <td>MNO-9876</td>
            <td><Rect width={30} height={20} color={theme.COLORS.GREEN_500} /></td>
            <td>16/02/24 12:15</td>
          </tr>
          <tr>
            <td>PQR-5432</td>
            <td><Rect width={30} height={20} color={theme.COLORS.YELLOW_500} /></td>
            <td>16/02/24 14:30</td>
          </tr>
          <tr>
            <td>JKL-2468</td>
            <td><Rect width={30} height={20} color={theme.COLORS.BLUE_500} /></td>
            <td>16/02/24 16:45</td>
          </tr>
          <tr>
            <td>JLM-3580</td>
            <td><Rect width={30} height={20} color={theme.COLORS.GREEN_500} /></td>
            <td>16/02/24 16:45</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
