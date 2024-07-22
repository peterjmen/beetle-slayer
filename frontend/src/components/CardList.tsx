import Card from "./Card";
import { Creature as CreatureType } from "../creature_list";

// Ensure that the CardList component correctly receives and uses the 'creatures' prop
function CardList({ creatures }: { creatures: CreatureType[] }) {
  return (
    <div>
      {creatures.map((creature, index) => (
        <Card
          key={index}
          name={creature.name}
          img={creature.imgURL}
          info={creature.info}
        />
      ))}
    </div>
  );
}

export default CardList;
