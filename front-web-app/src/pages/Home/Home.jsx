import { Container, Main, Cards, Charts, Analytics } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { Title } from "../../common/components/Title/Title";
import { Card } from "../../common/components/Card/Card";
import { FiBriefcase, FiMap, FiAlertTriangle } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { StackBarChart } from "../../common/components/Charts/StackBarChart/StackBarChart";
import { LastEventsTable } from "../../common/components/LastEventsTable/LastEventsTable";

export function Home() {
  return (
    <Container>
      <SideBar />
      <Main>
        <Title $text="Dashboard" className="title" />
        <Cards className="cards">
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
        <Analytics>
          <Charts className="chart-container">
            <StackBarChart />
          </Charts>
          <LastEventsTable />
        </Analytics>
      </Main>
    </Container>
  );
}
