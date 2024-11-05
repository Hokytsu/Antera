import styled from "styled-components";

export const HeaderConteinerStyled = styled.header`
  width: 100%;
  max-width: 2560px;
  height: 124px;
  background-color: transparent;
  display: flex;
  z-index:999;
  //------------Logo------------
  #LogoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    
    height: 100%;
  }
  #Logo_Img {
  }
  //------------Menu------------
  #MenuContainer {
    width: 75%;
    height: 100%;
  }
  #Menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 32px;
    align-items: center;
  }
  .navOption {
    text-decoration: none;
    color: #ffffff; //+++ mudar cor
    font-size: 22px; //+++ tORNAR RESPONSIVO
    font-weight: 400;
  }
  //------------Flags------------
  #FlagsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
 
    height: 100%; 
  }
  #socialMedia{
    width: 112px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    gap:21px;
  }


  #Divider{
    color: rgba(255, 255, 255, 0.29);
    width: 1px;
    height:35px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  #FlagsLanguages{
    width: 115px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //------------|||------------
  #HamburguerContainer {
  }
`;
