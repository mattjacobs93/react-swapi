import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import StarshipCardFront from "../../components/StarshipCardFront";
import {Link} from 'react-router-dom';


//

const StarshipList = (props) => {

  const [starships, setStarships] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  },[])

  return (
    
    <div className="card-front-container">
      {starships.length ?

        starships.map((starship, idx) => 
          <Link to={`/starships/${idx}`} state={{starship}} >  
            <div className="card-front">
              <StarshipCardFront key={idx} starshipNum={idx} starship={starship}/>
            </div>
          </Link>          
        )

      :

      <p>loading</p>

    }

    </div>


  )

}

export default StarshipList