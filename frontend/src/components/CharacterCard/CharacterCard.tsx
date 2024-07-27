import { Text } from "@chakra-ui/react";
import BaseCardTemplate from "../BaseCardTemplate/BaseCardTemplate";

const heroCardSizeScalingFactor = 4;
const scaleMultiplier = 100;

type CharacterCardProps = {
  name: string;
  img: string;
  strength: number;
  dexterity: number;
  spirit: number;
  hitpoints: number;
};

function CharacterCard({
  name,
  img,
  strength,
  dexterity,
  spirit,
}: CharacterCardProps) {
  const hero_card_size = `${scaleMultiplier * heroCardSizeScalingFactor}px`;
  return (
    <BaseCardTemplate name={name} img={img} cardSize={hero_card_size}>
      <Text className="cardDetails">
        <ul>Strength: {strength} </ul>
        <ul>Dex: {dexterity} </ul>
        <ul>Spirit: {spirit} </ul>
      </Text>
    </BaseCardTemplate>
  );
}

export default CharacterCard;
