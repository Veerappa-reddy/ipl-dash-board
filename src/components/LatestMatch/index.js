import './index.css'

const LatestMatch = props => {
  console.log(props)

  const {latestPlayedMatch} = props
  const {
    // competingTeamLogo,
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
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      {/* <img src={competingTeamLogo} alt={competingTeam} /> */}
      {/* <div className="right-side-details-container">
        <p>
          firstInnings <br />
          {firstInnings}
        </p>
        <p>
          secondInnings <br />
          {secondInnings}
        </p>
        <p>
          Man Of The Match <br />
          {manOfTheMatch}
        </p>
        <p>
          umpires <br /> {umpires}
        </p>
      </div> */}{' '}
    </div>
  )
}

export default LatestMatch
