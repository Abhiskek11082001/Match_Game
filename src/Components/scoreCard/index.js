import './index.css'

const ScoreCard = props => {
  const {score, reset} = props

  const onReset = () => {
    reset()
  }
  return (
    <div className="score-card-bg-container">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <p className="your-score">{score}</p>
      <button type="button" className="play-again-button" onClick={onReset}>
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
