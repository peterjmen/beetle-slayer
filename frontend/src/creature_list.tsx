export type Creature = {
  name: string;
  imgURL: string;
  info: string;
};

const creature_list: Creature[] = [
  {
    name: "blue",
    imgURL: "/images/creatures/blue_bug.png",
    info: "blue creature list deets",
  },
  {
    name: "red",
    imgURL: "/images/creatures/red_bug.png",
    info: "red creature list deets",
  },
  {
    name: "green",
    imgURL: "images/creatures/green_bug.png",
    info: "green creature deets",
  },
];

export default creature_list;
