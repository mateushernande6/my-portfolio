import styled from "styled-components";
import ProfileImg from "../../images/foto-Mateus.jpeg";

const media = {
  mobile1: "@media(max-width: 660px)",
  mobile2: "@media(max-width: 515px)",
  mobile3: "@media(max-width: 425px)",
  mobile4: "@media(max-width: 387px)",
};

const modalMedia = {
  mobile1: "@media(max-width: 676px)",
  mobile2: "@media(max-width: 580px)",
  mobile3: "@media(max-width: 415px)",
  mobile4: "@media(max-width: 340px)",
};

export const ContainerProfile = styled.div`
  width: 70vw;
  height: 200px;
  max-width: 800px;
  background-image: linear-gradient(to left, #2f2f2f, #212121);
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Photo = styled.div`
  width: 150px;
  height: 150px;
  background-color: red;
  background-image: url(${ProfileImg});
  background-size: cover;
  border-radius: 50%;
  margin-right: 20px;
  ${media.mobile1} {
    width: 130px;
    height: 130px;
  }
  ${media.mobile2} {
    width: 115px;
    height: 115px;
  }
  ${media.mobile3} {
    width: 100px;
    height: 100px;
  }
  ${media.mobile4} {
    width: 75px;
    height: 75px;
  }
`;

export const DivInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
  .nameTitle {
    color: white;
    ${media.mobile2} {
      font-size: 0.7rem;
    }
    ${media.mobile4} {
      font-size: 0.5rem;
    }
  }
  .stack {
    font-family: "Oswald", sans-serif;
    font-size: 2.5rem;
    margin: 0;
    background: -webkit-linear-gradient(right, #f08919, #d14e60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.mobile1} {
      font-size: 2rem;
    }
    ${media.mobile2} {
      font-size: 1.5rem;
    }
    ${media.mobile3} {
      font-size: 1rem;
    }
    ${media.mobile4} {
      font-size: 0.9rem;
    }
  }
  .btnContact {
    background-image: linear-gradient(to right, #f08919, #d14e60);
    color: white;
    font-weight: 600;
    &:hover {
      background-image: linear-gradient(to left, #f08919, #d14e60);
    }
  }
`;

export const Paper = styled.div`
  background-image: linear-gradient(to bottom, #f08919, #f37082e8);
  outline: none;
  width: 50vw;
  max-width: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: groove #f08919;
  ${modalMedia.mobile2} {
    width: 65vw;
  }
  .icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    height: 40px;
    .isIcon {
      line-height: 40px;
    }
    a {
      text-decoration: none;
      display: flex;
    }
    .email {
      font-size: 1.3rem;
      ${modalMedia.mobile1} {
        font-size: 1rem;
      }
      ${modalMedia.mobile3} {
        font-size: 0.8rem;
      }
      ${modalMedia.mobile4} {
        font-size: 0.6rem;
      }
    }
    .in {
      color: #0b66c2;
    }
    .insta {
      color: white;
    }
    .whats {
      color: #54dc0e;
    }
    .mail {
      color: black;
    }
  }
  .contactDiv {
    margin: 0 auto;
  }
  span {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    ${modalMedia.mobile4} {
      font-size: 1rem;
    }
  }
  .sigaDiv {
    width: 250px;
    img {
      width: 250px;
    }
    ${modalMedia.mobile3} {
      width: 200px;
      img {
        width: 200px;
      }
    }
    ${modalMedia.mobile4} {
      width: 150px;
      img {
        width: 150px;
      }
    }
  }
`;
