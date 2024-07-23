import { Box } from "@chakra-ui/react";

type CardProps = {
  name: string;
  img: string;
  info: string;
};

function Card({ name, img, info }: CardProps) {
  return (
    <Box textColor="maroon" className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img src={img} style={{ width: "15%", height: "15%" }} />
      </div>
      <div className="bottom">
        <p className="info">{info}</p>
      </div>
    </Box>
  );
}

export default Card;
