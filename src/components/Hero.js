import '../style/hero.css'

export default function Hero({img, text}) {
    return (
      <div className="hero">
        <img src={img} alt="hero"/>
        <p>{text}</p>
      </div>
    );
}