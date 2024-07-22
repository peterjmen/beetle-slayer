type CardProps = {
  name: string;
  img: string;
  info: string;
};

function Card({ name, img, info }: CardProps) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img src={img} style={{ width: "20%", height: "20%" }} />
      </div>
      <div className="bottom">
        <p className="info">{info}</p>
      </div>
    </div>
  );
}

export default Card;
