import { HeaderConteinerStyled } from "./headerStyled";
import { Link } from "react-router-dom";

import ProntoLogo from "../../assets/ProntoLogo.svg";
import BR from "../../assets/BR.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Instagram from "../../assets/Instagram.svg";

function Header() {
  return (
    <HeaderConteinerStyled>
      <div id="LogoContainer">
        <Link to="/">
          <img src={ProntoLogo} id="logo_Img" alt="Logo" />
        </Link>
      </div>
      <div id="MenuContainer">
        <nav id="Menu">
          <Link className="navOption" to="/">HOME</Link>
          <Link className="navOption"to="/Sobre">SOBRE NÓS</Link> 
          <Link className="navOption"to="/NossasObras">OBRAS PRONTAS</Link>{/*+++ To do: Criar rota no main*/}
          <Link className="navOption"to="/Contatos">CONTATOS</Link>{/*+++ To do: Criar rota no main*/}
        </nav>
      </div>
      <div id="FlagsContainer">
        <div id="socialMedia">
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
        </div>
        <div id="Divider">|</div>
        <div id="FlagsLanguages">
            <img src={BR} alt="" />
        </div>
      </div>
      <div id="HamburguerContainer"></div>
    </HeaderConteinerStyled>
  );
}

export default Header;
