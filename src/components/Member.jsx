import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import FamilyContext from '../context/FamilyContext';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Member() {

  //Context
  const {family} = useContext(FamilyContext)
  
  const { memberId } = useParams();
  const memberInfo = family.find(member => member.id == memberId);

  const {name, image, role, age, sport, phrase} = memberInfo;

  return (
    <div className="memberDetail">      
      <h1 className="mainHeading">{name}</h1>
      <img src={image} alt={name}/>
      <ul>
        <li className="detail">Role: <span className="detEm">{role}</span></li>
        <li className="detail">Age: <span className="detEm">{age}</span></li>
        <li className="detail">Sport: <span className="detEm">{sport}</span></li>
        <li className="detail">Phrase: <FaQuoteLeft style={{'marginLeft': '10px', 'color': 'red' }} /> <span className="detEm">{phrase}</span> <FaQuoteRight style={{'color': 'red'}}/></li>
      </ul>
      <Link className="backBtn" to="/">Back To Family</Link>
    </div>
  )
}

export default Member