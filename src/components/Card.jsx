import {Link} from 'react-router-dom';

function Card({member}) {

  return (
    <div className="card">
      <Link className="cardLink" key={member.id} to={`/${member.id}`}>
        <img className="bubbleImage" src={member.image} alt={`pic of ${member.name}`}/>
      </Link>
    </div>
  )
}

export default Card;