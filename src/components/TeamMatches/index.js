import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

// import {Link} from 'react-router-dom'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

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

    this.setState({teamData: formattedData, isLoading: false})
    // console.log(formattedData)
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerURL, latestPlayedMatch, recentMatches} = teamData
    console.log(recentMatches)

    return (
      //   <div className="team-matches-container">
      isLoading ? (
        <div className="loader-2" testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div className="team-bg-container">
          <div className="team-container">
            <img
              src={teamBannerURL}
              alt="team banner"
              className="team-banner"
            />
            <LatestMatch latestPlayedMatch={latestPlayedMatch} />
            <ul className="un-list">
              {recentMatches.map(eachMatch => (
                <MatchCard details={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        </div>
      )
      //   </div>
    )
  }
}

export default TeamMatches
