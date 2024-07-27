export type ActionCardType = {
  name: string;
  img: string;
  info: string;
  attack?: number;
  defend?: number;
  heal?: number;
};

const example_action_card = {
  name: "anActionCard",
  img: "https://dummyimage.com/400x300/ba02ba/fff.jpg&text=400x300+Action",
  attack: 3,
  defend: 2,
  heal: 1,
  info: "no info",
};

let example_action_card_list: ActionCardType[] = [];

for (let i = 0; i < 5; i++) {
  example_action_card_list.push(example_action_card);
}

export default example_action_card_list;
