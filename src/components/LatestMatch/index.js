import './index.css'

const LatestMatch = props => {
  console.log(props)

  const {latestPlayedMatch} = props
  const {
    competingTeamLogo,
    date,
    venue,
    competingTeam,
    manOfTheMatch,
    result,
    umpires,
    firstInnings,
    secondInnings,
    // matchStatus,
  } = latestPlayedMatch
  console.log(latestPlayedMatch)

  return (
    <div className="latest-match-container">
      <div className="left-side-details-container">
        <p className="competive-team-name">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="opponent-team-image"
      />
      <div className="right-side-details-container">
        <p className="p-css">firstInnings</p>
        <p className="p-css">{firstInnings}</p>
        <p className="p-css">secondInnings</p>
        <p className="p-css">{secondInnings}</p>
        <p className="p-css">Man Of The Match</p>
        <p className="p-css">{manOfTheMatch}</p>
        <p className="p-css">umpires</p>
        <p className="p-css">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
