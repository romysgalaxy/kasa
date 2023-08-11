import expandMore from '../assets/img/expand_more.svg'
import expandLess from '../assets/img/expand_less.svg'
import { useState } from 'react'
import '../style/accordion.css'

export default function Accordion({title, text}) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='accordion'>
      <div className='accordion_header' onClick={toggleAccordion}>
        <h3> {title}</h3>
        <img src={isExpanded ? expandLess : expandMore} alt='expand'/>
      </div>
      {isExpanded && (
        <div className='accordion_content'>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

