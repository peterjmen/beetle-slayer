export type Creature = {
  name: string;
  img: string;
  info: string;
  size_scale: number;
};

const creature_list: Creature[] = [
  {
    name: "blue",
    img: "/images/creatures/blue_bug.png",
    info: "blue creature list deets",
    size_scale: 100,
  },
  {
    name: "red",
    img: "/images/creatures/red_bug.png",
    info: "red creature list deets",
    size_scale: 100,
  },
  {
    name: "green",
    img: "images/creatures/green_bug.png",
    info: "green creature deets",
    size_scale: 100,
  },
];

export default creature_list;
