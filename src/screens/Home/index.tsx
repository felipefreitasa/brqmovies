import { useEffect } from "react";
import { BackHandler } from "react-native";

import { AppBar } from "@components/AppBar";

import { Container } from "./styles";

export function Home() {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => null
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      <AppBar/>

      <Container></Container>
    </>
  );
}
