// Importing Card to set up Storybook
import Card from "../components/Card/Card";

export default {
  title: "Card",
  component: Card,
};

// Define a Storybook template that renders the Card with sample data
export const ShowCard = () => (
  <Card
    name="Sample Creature"
    img="creature_image_url"
    info="Some information about the creature"
  />
);
