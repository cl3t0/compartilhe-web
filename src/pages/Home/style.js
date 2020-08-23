import styled from "styled-components";
import background_image from "../../assets/images/fundohome.jpg";

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${background_image});
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: row;
`;

export const Column = styled.div`
  flex-direction: column;
  margin: auto;
`;

export const Image = styled.img`
  height: ${(props) => props.height};
  src: ${(props) => props.src};
  margin: auto;
`;

export const Button = styled.button`
  align-items: center;
  width: 25vw;
  height: 20vh;
`;
