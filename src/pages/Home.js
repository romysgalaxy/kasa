import '../style/home.css'
import data from '../data/data.json'
import Card from '../components/Card';
import Hero from '../components/Hero';
import img from '../assets/img/home-page.jpg';

function Home() {
  return (
    <div>
      <Hero img={img} text="Chez vous, partout et ailleurs"/>
      <div className="card_container">
        {data.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
