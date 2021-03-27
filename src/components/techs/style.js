import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  max-width: 800px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 8px 0 8px;
  .titleTechs {
    font-size: 1.5rem;
    color: #ee9619;
    font-family: "Oswald", sans-serif;
    margin-bottom: 40px;
  }
  .divTechs {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: ${(props) => props.wid && `${props.wid}px`};
  margin-bottom: 20px;
`;
