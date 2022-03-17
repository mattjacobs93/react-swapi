import {Link} from 'react-router-dom'

const StarshipCardBack = ({starship}) => {
  return (
    <>
      <div className='card-back'>
        <div className='starship-name-card-back'>NAME: {starship.name}</div>
        <div className='starship-name-card-back'>MODEL: {starship.model}</div>
        <Link to='/'>
          <div className='star-ship-return-card-back'>RETURN</div>
        </Link>
      </div>
    </>
  )
}

export default StarshipCardBack