import {Link} from 'react-router-dom'

const StarshipCardFront = (props) => {


  return (
    
      <div className="starship-card-front">
        {props.starship.name}
      </div>
  
  )
}

export default StarshipCardFront;