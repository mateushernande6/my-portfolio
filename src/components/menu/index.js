import { MenuBar, ContainerMenu, Logo, ContainerMain, DivLogo } from "./style";
import Profile from "../profile";
import SobreMim from "../sobre-mim";
import LogoSvg from "../../images/logo-my-portifolio.svg";
import Works from "../works";
import Techs from "../techs";
import Footer from "../footer";

const Menu = () => {
  return (
    <>
      <ContainerMenu>
        <DivLogo>
          <Logo src={LogoSvg} />
        </DivLogo>
        <ContainerMain>
          <MenuBar>
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mim">Sobre mim</a>
            <a href="#works">Trabalhos</a>
            <a href="#techs">Tecnologias</a>
          </MenuBar>
          <Profile />
          <SobreMim />
          <Works />
          <Techs />
        </ContainerMain>
      </ContainerMenu>
      <Footer />
    </>
  );
};
export default Menu;
