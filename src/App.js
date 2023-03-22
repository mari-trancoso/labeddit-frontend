import { ChakraProvider } from "@chakra-ui/react";
import  Router  from "./routes/router";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  
  return (
    <ChakraProvider>
      <Router/>
    </ChakraProvider>
    
  );
}

export default App;
