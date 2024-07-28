import { Box, Grid } from "@chakra-ui/react";
import "./App.css";
import ListCards from "./components/ListCards/ListCards";
import creature_list from "./creature_list";
import ActionCard from "./components/ActionCard/ActionCard";
import HeroCard from "./components/HeroCard/HeroCard";
import example_hero from "./components/HeroCard/ExampleHeroCard";
import CreatureCard from "./components/CreatureCard/CreatureCard";
import example_action_card_list from "./action_card_list";

function App() {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        minHeight="85vh"
        minWidth="100vw"
      >
        <Grid p={2} templateRows="3fr 2fr" gap={2} backgroundColor="blue.100">
          <Box gridRow="1 / 2" backgroundColor="green.100">
            <Grid templateColumns="2fr 1fr 2fr" gap={2}>
              <Box backgroundColor="purple.100">
                <HeroCard {...example_hero} />
              </Box>
              <Box backgroundColor="purple.200">Details</Box>
              <Box backgroundColor="purple.300">Content 3</Box>
            </Grid>
          </Box>
          <Box gridRow="2 / 3" backgroundColor="orange.100">
            <ListCards
              list={example_action_card_list}
              CardComponent={ActionCard}
              orientation="row"
            />
          </Box>
        </Grid>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={2}
          p={2}
          backgroundColor="teal.100"
        >
          {" "}
          <Box backgroundColor="bisque">Intention</Box>
          <Box p={2} backgroundColor="red.100">
            <ListCards
              list={creature_list}
              CardComponent={CreatureCard}
              orientation="column"
            />
          </Box>
          <Box backgroundColor="thistle">Details</Box>
        </Grid>
      </Grid>
      {/* <Box display="flex" backgroundColor={"Highlight"}>
        Combat Log
      </Box> */}
    </>
  );
}

export default App;
