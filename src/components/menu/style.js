import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 660px)",
  mobile2: "@media(max-width: 410px)",
  mobile3: "@media(max-width: 310px)",
  // mobile4: "@media(max-width: 405px)",
};

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1114px;
  margin: 0 auto;
  ${media.mobile1} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBar = styled.div`
  width: 70vw;
  height: 40px;
  max-width: 800px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(to left, #2f2f2f, #212121);
  a {
    color: #ee9619;
    font-weight: 600;
    line-height: 40px;
    text-decoration: none;
    ${media.mobile1} {
      font-size: 0.9rem;
    }
    ${media.mobile2} {
      font-size: 0.7rem;
    }
    ${media.mobile3} {
      font-size: 0.6rem;
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const DivLogo = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  ${media.mobile1} {
    left: -20px;
  }
  ${media.mobile3} {
    left: -5;
  }
`;
