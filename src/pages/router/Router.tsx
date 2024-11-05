import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { ContainerRouterStyled } from "./RouterStyled";

function ContaineRouter() {
  return (
    <ContainerRouterStyled>
      <Header />
      <Outlet />
      <Footer />
    </ContainerRouterStyled>
  );
}

export default ContaineRouter;
