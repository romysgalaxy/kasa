import { Link } from "react-router-dom";
import '../style/card.css'

export default function Card(props) {
    const {title, id, cover} = props.item
    return (
    <div className="card" key={id}>
        <Link to={`/${id}`}>
          <img src={cover} alt={title} />
          <p>{title}</p>
        </Link>
    </div>
  );
}

