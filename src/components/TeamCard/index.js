import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li>
      <Link to={`/ipl/${id}`}>
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
