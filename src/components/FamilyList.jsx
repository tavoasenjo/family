import React, {useContext} from 'react';
import Card from './Card';
import FamilyContext from '../context/FamilyContext';

function FamilyList() {

  const {family} = useContext(FamilyContext);

  return (
    <div className="cardContainer">
      {
        family.map((member) => (          
          <Card className="cardItem" key={member.id} member={member}/>
        ))
      }
    </div>
  )
}

export default FamilyList;