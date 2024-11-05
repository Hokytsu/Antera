import Bg from "../../assets/Bg.svg";
import { HomeConteinerStyled } from "./homeStyled";
import Pronto1 from "../../assets/Pronto1.svg";

function Home() {
  return (
    <HomeConteinerStyled>
      <section id ="FirstSection">
        <div id="filter"/>
       <img src={Pronto1} alt=""  />
        <h1>Desde 2016 descomplicando sua obra!</h1>
      </section>
    </HomeConteinerStyled>
  );
}

export default Home;
