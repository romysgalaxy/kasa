import chevronLeft from '../assets/img/chevron_left.svg'
import chevronRight from '../assets/img/chevron_right.svg'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/data.json";
import '../style/slideShow.css'

export default function SlideShow() {

  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);
  const pictures = item.pictures

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

    return (
      <div className="slideShow"> 
        <img src={pictures[currentIndex]} alt={`ShowSlide n°${currentIndex + 1}`} />
        <div className="slideShow_btn">
          <button onClick={goToPrevious}>
            <img src={chevronLeft} alt="Previous"/>
          </button>
          <button onClick={goToNext}>
            <img src={chevronRight} alt="Next"/>
          </button>
        </div>
      </div>
    );
  }
  
  