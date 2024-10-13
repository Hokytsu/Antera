import  { useState, useEffect } from "react";
import { LoadScreenStyled } from "./MainStyled";
import anteraLogo from "../../assets/anteraPreta.png";

function LoadScreen() {
  const [stop, setStop] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setStop(true); 
    }, 10000); //+++

    return () => clearTimeout(timer); 
  }, []);

  return (
    <LoadScreenStyled stop={stop}>
      <img id="logoLoader" src={anteraLogo} alt="antera" />
    </LoadScreenStyled>
  );
}

export default LoadScreen;
