import '../App.css';
import data from '../data/data.json'
import Card from '../components/Card';

function Home() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default Home;
