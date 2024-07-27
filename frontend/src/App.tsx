import { Box, Grid } from "@chakra-ui/react";
import "./App.css";
import ListCards from "./components/ListCards/ListCards";
import creature_list from "./creature_list";
import ActionCard from "./components/ActionCard/ActionCard";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import example_character from "./components/CharacterCard/ExampleCharacterCard";
import CreatureCard from "./components/CreatureCard/CreatureCard";
import example_action_card_list from "./action_card_list";

function App() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
          <Box gridRow="1 / 2" mb={2}>
            <CharacterCard {...example_character} />
          </Box>
          <Box gridRow="2 / 3" mb={2}>
            <ListCards
              list={example_action_card_list}
              CardComponent={ActionCard}
              orientation="row"
            />
          </Box>
        </Grid>
        <ListCards
          list={creature_list}
          CardComponent={CreatureCard}
          orientation="column"
        />
      </Grid>
      {/* <Box display="flex" backgroundColor={"Highlight"}>
        Combat Log
      </Box> */}
    </>
  );
}

export default App;
