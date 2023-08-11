import data from "../data/data.json";
import { useParams } from "react-router-dom";
import starGray from "../assets/img/star-gray.svg";
import starPink from "../assets/img/star-pink.svg";
import Accordion from "./Accordion";
import "../style/cardDetail.css";

export default function CardDetail() {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  const generateStars = (rating) => {
    const stars = [];
    const ratingInt = parseInt(rating, 10); // Conversion en entier
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingInt) {
        stars.push(<img key={i} src={starPink} alt="pink star" />);
      } else {
        stars.push(<img key={i} src={starGray} alt="gray star" />);
      }
    }
    return stars;
  };

  return (
    <div className="cardDetail">
      <div className="cardDetail_header">
        <div className="cardDetail_part1">
          <h1>{item.title}</h1>
          <p className="cardDetail_localisation">{item.location}</p>
          <div className="cardDetail_container-tag">
            {item.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="cardDetail_part2">
          <div className="cardDetail_container-star">
            {generateStars(item.rating)}
          </div>
          <div className="cardDetail_container-name">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt={item.host.name} />
          </div>
        </div>
      </div>
      <div className="cardDetail_content">
        <Accordion title="Description" text={item.description} />
        <Accordion
          title="Equipements"
          text={
            <ul>
              {item.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
