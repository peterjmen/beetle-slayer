import { Box, Heading, Image, Text } from "@chakra-ui/react";

type CardProps = {
  name: string;
  img: string;
  info: string;
};

function Card({ name, img, info }: CardProps) {
  return (
    <Box
      className="card"
      textColor="maroon"
      textAlign="center"
      backgroundColor="pink"
      padding={4}
      border={"2px solid maroon"}
      margin={4}
    >
      <Heading className="cardTitle" fontSize={"x-large"}>
        {name}
      </Heading>
      <Image className="cardPicture" src={img} alt="bugs" height={"350px"} />
      <Text className="cardDetails">{info}</Text>
    </Box>
  );
}

export default Card;
