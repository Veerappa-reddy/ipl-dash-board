import {Component} from 'react'

// import {Link} from 'react-router-dom'

class TeamMatches extends Component {
  state = {teamData: []}

  componentDidMount() {
    console.log('Hi')

    this.getTeamData()
  }

  getTeamData = async () => {
    console.log(this.props)

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response1 = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data1 = await response1.json()
    // console.log(id)
    this.setState({teamData: data1})
  }

  render() {
    return (
      //   <Link to="/ipl/1">
      <div>
        <h1>j</h1>
      </div>
      //   </Link>
    )
  }
}

export default TeamMatches
