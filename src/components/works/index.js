import { Container, Image } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import habitosImg from "../../images/foto-app-66-days.jpg";
import kenzieHub from "../../images/foto-kenzie-hub.jpg";
import lojaKenzie from "../../images/foto-loja-da-kenzie.jpg";
import menanger from "../../images/foto-hogwarts-menanger.jpg";

const Works = () => {
  return (
    <Container id="works">
      <Carousel infiniteLoop={true} autoPlay={true} interval={4000} stopOnHover>
        <div>
          <img src={habitosImg} />
          <p className="legend">App de monitoramento de habito</p>
        </div>
        <div>
          <img src={kenzieHub} />
          <p className="legend">Projeto para cadastro de alunos da kenzie</p>
        </div>
        <div>
          <img src={lojaKenzie} />
          <p className="legend">Projeto loja da kenzie</p>
        </div>
        <div>
          <img src={menanger} />
          <p className="legend">
            Sistema de controle de notas para os personagens de harry poter
          </p>
        </div>
      </Carousel>
    </Container>
  );
};
export default Works;
