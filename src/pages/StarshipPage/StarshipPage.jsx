import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import StarshipCardBack from '../../components/StarshipCardBack'

const StarshipPage = (props) => {

  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

useEffect (()=>{
  setStarshipDetails(location.state.starship)
},[])



  return (
    <>
      <StarshipCardBack starship={starshipDetails}/>
    </>
  )

}

export default StarshipPage