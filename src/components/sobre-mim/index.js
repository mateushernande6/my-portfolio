import { Container, DivContainer, DivImage } from "./style";
const SobreMim = () => {
  return (
    <Container id="sobre-mim">
      <DivContainer>
        <div>
          <h3 className="thisH3">Sobre mim</h3>
        </div>
        <div>
          <h2 className="thisH2">Eu sou Desenvolvedor...</h2>
        </div>
        <div>
          <p>
            {" "}
            Sempre gostei de criar e resolver coisas com minhas próprias mãos,
            sempre que via que algo estava quebrado, antes de eu pensar em
            comprar um novo eu sempre tentava achar uma forma de conserta-lo, e
            se não conseguia tentava reaproveitar para alguma outra coisa, e
            quando conheci a area de desenvolvimento de software foi amor a
            primeira vista, pois me possibilitaria criar coisas com minhas
            proprias mãos, e o melhor é que o que eu criar poderá ajudar muitas
            pessoas e isso me deixa cada dia mais empolgado, para aprender mais
            e melhorar a minha forma de fazer essas 'coisas', e alcançar novos
            horizontes!
          </p>
        </div>
      </DivContainer>
      <DivImage />
    </Container>
  );
};
export default SobreMim;
