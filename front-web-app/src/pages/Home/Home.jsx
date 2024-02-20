  import { Container, Main, Cards, Charts } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { Title } from "../../common/components/Title/Title";
import { Card } from "../../common/components/Card/Card";
import { FiBriefcase, FiMap, FiAlertTriangle } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { StackBarChart } from "../../common/components/Charts/StackBarChart/StackBarChart";
import { EventTable } from "../../common/components/EventTable/EventTable";

export function Home() {
  return (
    <Container>
        <SideBar />
        <Main>
          <Title $text="Home" className=""/>
          <Cards>
            <Card
              icon={MdBusAlert}
              $title={"Veículos"}
              $cardValue="200"
              $percent="+5.75"
              className="vehicles"
              $up
            />
            <Card
              icon={FiAlertTriangle}
              $title={"Eventos"}
              $cardValue="1100"
              $percent="-3.27"
              className="events"
            />
            <Card
              icon={FiMap}
              $title={"Operações"}
              $cardValue="177"
              $percent="+3.32"
              className="operations"
              $up
            />
            <Card
              icon={FiBriefcase}
              $title={"Clientes"}
              $cardValue="70"
              $percent="+11.86"
              className="clients"
              $up
            />
          </Cards>
          <Charts>
            <StackBarChart />
            <EventTable />
          </Charts>
        </Main>
    </Container>
  );
}
