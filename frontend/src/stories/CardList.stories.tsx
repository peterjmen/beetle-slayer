// Importing CardList and creature_list to set up Storybook
import creature_list from "../creature_list";
import ListCards from "../components/ListCards/ListCards";
import CreatureCard from "../components/CreatureCard/CreatureCard";

export default {
  title: "CardList",
  component: ListCards,
};

// Define a Storybook template that renders the CardList with the sample creature data
export const ShowCardList = () => (
  <ListCards
    list={creature_list}
    CardComponent={CreatureCard}
    orientation={"column"}
  />
);
