import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

// import {Link} from 'react-router-dom'

class TeamMatches extends Component {
  state = {teamData: {}}

  componentDidMount() {
    this.getTeamData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    // console.log(fetchedData)

    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestPlayedMatch: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }

    this.setState({teamData: formattedData})
    // console.log(formattedData)
  }

  render() {
    const {teamData} = this.state
    const {teamBannerURL, latestPlayedMatch, recentMatches} = teamData
    console.log(recentMatches)

    return (
      <div className="team-bg-container">
        <img src={teamBannerURL} alt="team banner" className="team-image" />
        {/* <LatestMatch latestPlayedMatch={latestPlayedMatch} /> */}
        <ul>
          {recentMatches.map(eachMatch => (
            <MatchCard details={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
