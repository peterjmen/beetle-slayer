import { Creature } from "../../creature_list";
import Card from "../Card/Card";
import { Box } from "@chakra-ui/react";

// Ensure that the CardList component correctly receives and uses the 'creatures' prop
function CardList({ creatures }: { creatures: Creature[] }) {
  return (
    <Box display="flex" flexDirection="row">
      {creatures.map((creature, index) => (
        <Card
          key={index}
          name={creature.name}
          img={creature.imgURL}
          info={creature.info}
        />
      ))}
    </Box>
  );
}

export default CardList;
