import "./App.css";
import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import { WPProvider } from "./provider/Provider";
import theme from "./theme";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

import arrowUp from "./asset/arrowdown.svg";

const ScrollTopBtn = () => {
  return (
    <Flex
      pos={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      boxSize={10}
      borderRadius={"full"}
      top={"90%"}
      left={"95%"}
      bg={"#E6E7E8"}
      boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
      cursor={"pointer"}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <Image src={arrowUp} boxSize={6} pt={1} />
    </Flex>
  );
};

function App() {
  return (
    <WPProvider>
      <ChakraProvider theme={theme}>
        <Sidebar />
        <ScrollTopBtn />
        <AllRoutes />
      </ChakraProvider>
    </WPProvider>
  );
}

export default App;
