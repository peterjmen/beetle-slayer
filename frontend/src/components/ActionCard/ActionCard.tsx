import { Text } from "@chakra-ui/react";
import BaseCardTemplate from "../BaseCardTemplate/BaseCardTemplate";

const actionCardSizeScalingFactor = 1.6;
const scaleMultiplier = 100;

type ActionCardProps = {
  name: string;
  img: string;
  info?: string;
  attack: number;
  defend: number;
  heal: number;
};

function ActionCard({
  name,
  img,
  info,
  attack,
  defend,
  heal,
}: ActionCardProps) {
  const action_card_size = `${scaleMultiplier * actionCardSizeScalingFactor}px`;
  return (
    <BaseCardTemplate
      name={name}
      img={img}
      info={info}
      cardSize={action_card_size}
    >
      <Text className="cardDetails">
        <ul>Attack: {attack} </ul>
        <ul>Defend: {defend} </ul>
        <ul>Heal: {heal} </ul>
      </Text>
    </BaseCardTemplate>
  );
}

export default ActionCard;
