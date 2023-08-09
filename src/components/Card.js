import { Link } from "react-router-dom";

export default function Card(props) {
    const {title, id} = props.item
    return (
    <div key={id}>
        <Link to={`/${id}`}>{title}</Link>
    </div>
  );
}

