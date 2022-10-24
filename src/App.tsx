import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import { WPProvider } from "./provider/Provider";
import theme from "./theme";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <WPProvider>
      <ChakraProvider theme={theme}>
        <Sidebar />
        <AllRoutes />
      </ChakraProvider>
    </WPProvider>
  );
}

export default App;
