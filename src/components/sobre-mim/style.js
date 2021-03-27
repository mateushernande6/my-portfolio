import styled from "styled-components";
import ImageSobre from "../../images/olhando-horizonte.jpeg";

const media = {
  mobile1: "@media(max-width: 660px)",
  mobile2: "@media(max-width: 516px)",
  mobile3: "@media(max-width: 450px)",
  mobile4: "@media(max-width: 358px)",
};

export const Container = styled.div`
  width: 70vw;
  max-width: 800px;
  background-image: linear-gradient(to left, #2f2f2f, #212121);
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile1} {
    flex-direction: column;
  }
`;

export const DivContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 20px;
  color: white;
  .thisH3 {
    color: #ee9619;
    font-family: "Oswald", sans-serif;
  }
  .thisH2 {
    font-family: "Oswald", sans-serif;
    font-size: 2.3rem;
    margin: 0;
    ${media.mobile2} {
      font-size: 2rem;
    }
    ${media.mobile3} {
      font-size: 1.5rem;
    }
    ${media.mobile4} {
      font-size: 1.2rem;
    }
  }
  ${media.mobile1} {
    width: 95%;
    height: auto;
  }
`;
export const DivImage = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${ImageSobre});
  background-size: cover;
  ${media.mobile1} {
    width: 100%;
    height: 200px;
  }
`;
