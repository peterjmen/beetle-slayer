// Importing Card to set up Storybook
import CreatureCard from "../components/CreatureCard/CreatureCard";

export default {
  title: "Card",
  component: CreatureCard,
};

// Define a Storybook template that renders the Card with sample data
export const ShowCard = () => (
  <CreatureCard
    name="Sample Creature"
    img="creature_image_url"
    info="Some information about the creature"
    cardSize={200}
  />
);
