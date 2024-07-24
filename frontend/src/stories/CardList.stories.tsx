// Importing CardList and creature_list to set up Storybook
import CardList from "../components/CardList/CardList";
import creature_list from "../creature_list";

export default {
  title: "CardList",
  component: CardList,
};

// Define a Storybook template that renders the CardList with the sample creature data
export const ShowCardList = () => <CardList creatures={creature_list} />;
