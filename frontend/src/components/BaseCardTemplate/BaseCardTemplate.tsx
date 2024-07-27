import { AspectRatio, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type BaseCardProps = {
  name?: string;
  img?: string;
  info?: string;
  children?: React.ReactNode;
  cardSize?: string;
};

const defaultProps: BaseCardProps = {
  name: "Default Name",
  img: "https://placehold.co/400x300",
  info: "Default Info",
  cardSize: "200px",
};

function BaseCardTemplate({
  name,
  img,
  info,
  children,
  cardSize = defaultProps.cardSize,
}: BaseCardProps = defaultProps) {
  return (
    <AspectRatio ratio={2.5 / 3.5} width={cardSize}>
      <Flex
        direction="column"
        className="card"
        textColor="maroon"
        textAlign="center"
        backgroundColor="pink"
        padding={1}
        border={"2px solid maroon"}
        margin={1}
      >
        <Heading className="cardTitle" fontSize={"x-large"}>
          {name}
        </Heading>
        <Box height="0" flexGrow={1}>
          <Image
            className="cardPicture"
            src={img}
            alt={name}
            objectFit="contain"
            width="100%"
            height="100%"
            maxW="none"
            maxH="none"
          />
        </Box>
        <Text className="cardDetails" fontSize={"small"}>
          {info}
        </Text>
        {children}
      </Flex>
    </AspectRatio>
  );
}

BaseCardTemplate.defaultProps = defaultProps;

export default BaseCardTemplate;
