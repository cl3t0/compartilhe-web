import React from "react";
import { Background, Image, Button, Column } from "./style";
import logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <Background>
      <Column></Column>
      <Column>
        <Image src={logo} height="25vh"></Image>
        <Button></Button>
      </Column>
      <Column></Column>
    </Background>
  );
}

export default Home;
