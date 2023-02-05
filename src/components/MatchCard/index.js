import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = details

  const matchStatusColor = matchStatus === 'Won' ? 'won-css' : 'lost-css'

  return (
    <li>
      <div className="match-card-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-image"
        />
        <p className="opponent-team-name1">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusColor}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
