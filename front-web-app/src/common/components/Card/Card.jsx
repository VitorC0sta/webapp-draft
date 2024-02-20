import { Container } from "./styles";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import PropTypes from "prop-types";

export function Card({ icon: Icon, $cardValue,$up, $percent, $title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <div className="content">
        <h3>{$cardValue}</h3>
        <div className="percent-data">
          { $up? <FiTrendingUp/> : <FiTrendingDown/> }
          <span>{$percent}%</span>
        </div>
      </div>
      <span>{$title}</span>
    </Container>
  );
}

Card.propTypes = {
  icon: PropTypes.func,
  $cardValue: PropTypes.string,
  $percent: PropTypes.string,
  $title: PropTypes.string,
  $up: PropTypes.bool
};
