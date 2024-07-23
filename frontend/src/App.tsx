import { Heading } from "@chakra-ui/react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import creature_list from "./creature_list";

function App() {
  return (
    <>
      <Heading textAlign="center" color="orange">
        Vite + React
      </Heading>
      <CardList creatures={creature_list} />
    </>
  );
}

export default App;
