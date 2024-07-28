import { Box } from "@chakra-ui/react";

type ListCardsProps = {
  list: any[];
  CardComponent: React.FC<any>;
  orientation: "row" | "row-reverse" | "column" | "column-reverse";
};

function ListCards({ list, CardComponent, orientation }: ListCardsProps) {
  return (
    <Box
      p={2}
      backgroundColor={"grey"}
      display="flex"
      flexDirection={orientation}
      gap={2}
    >
      {list.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </Box>
  );
}

export default ListCards;
