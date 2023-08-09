import data from '../data/data.json'
import { useParams } from "react-router-dom";

export default function CardDetail() {
    const { itemId } = useParams();
    const item = data.find((item) => item.id === itemId);
    return (
      <div>
        <h1>Detail de l'item {itemId}</h1>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    );
  }
  