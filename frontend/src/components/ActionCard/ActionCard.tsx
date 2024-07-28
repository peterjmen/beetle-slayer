import { Box, Button, Spacer, Text } from "@chakra-ui/react";
import BaseCardTemplate from "../BaseCardTemplate/BaseCardTemplate";
import { useCombatLog } from "../../Contexts/CombatLog/CombatLogContext"; // Ensure this import path is correct

const actionCardSizeScalingFactor = 1.4;
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
  const { addCombatLog } = useCombatLog(); // Using the combat log hook
  const action_card_size = `${scaleMultiplier * actionCardSizeScalingFactor}px`;

  // Function to handle the button click
  const handleClick = () => {
    // Log an action message when the card is played
    addCombatLog(
      `Played ${name}: Attack ${attack}, Defend ${defend}, Heal ${heal}`
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
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
      <Spacer mb={2}></Spacer>
      <Button onClick={handleClick}>Play Me</Button>{" "}
      {/* Updated to use handleClick */}
    </Box>
  );
}

export default ActionCard;
