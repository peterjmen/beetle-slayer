import BaseCardTemplate from "../BaseCardTemplate/BaseCardTemplate";

const creatureCardSizeScalingFactor = 1.5;
const scaleMultiplier = 100;

type CreatureCardProps = {
  name: string;
  img: string;
  info: string;
  cardSize: number;
};

function CreatureCard({
  name,
  img,
  info,
  cardSize = scaleMultiplier,
}: CreatureCardProps) {
  const creature_card_size = `${cardSize * creatureCardSizeScalingFactor}px`;
  return (
    <BaseCardTemplate
      name={name}
      img={img}
      info={info}
      cardSize={creature_card_size}
    />
  );
}

export default CreatureCard;
