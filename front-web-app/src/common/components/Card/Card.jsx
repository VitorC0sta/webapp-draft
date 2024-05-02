import { Container } from "./styles";


export function Card({ icon: Icon, $cardValue, $title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <div className="content">
        <h3>{$cardValue}</h3>
      </div>
      <span>{$title}</span>
    </Container>
  );
}
