const MatchCard = props => {
  const {details} = props
  const {result} = details

  return (
    <li>
      <div>
        <h1>{result}</h1>
      </div>
    </li>
  )
}

export default MatchCard
