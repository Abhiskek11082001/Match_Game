import './index.css'

import {Component} from 'react'
import TabItem from '../tabItem'

import ImageItem from '../imageItem'

import ScoreCard from '../scoreCard'

class MatchGame extends Component {
  state = {
    matchImageIndex: 0,
    score: 0,
    timer: 60,
    activeTabId: 'FRUIT',
    isTimerRunning: true,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.onClearInterval()
  }

  onClearInterval = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.onClearInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  getActiveList = category => {
    const {imagesList} = this.props
    return imagesList.filter(eachItem => eachItem.category === category)
  }

  checkMatch = checkId => {
    const {matchImageIndex} = this.state
    const {imagesList} = this.props
    const {id} = imagesList[matchImageIndex]

    const randomIndex = Math.ceil(Math.random() * imagesList.length)
    console.log(randomIndex)
    if (checkId === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchImageIndex: randomIndex,
      }))
    } else {
      this.onClearInterval()
      this.setState({
        isTimerRunning: false,
      })
    }
  }

  clickTab = tabId => {
    this.setState({
      activeTabId: tabId,
    })
  }

  reset = () => {
    this.setState({
      score: 0,
      timer: 60,
      isTimerRunning: true,
      matchImageIndex: 0,
    })
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {
      matchImageIndex,
      score,
      timer,
      activeTabId,
      isTimerRunning,
    } = this.state

    const {imageUrl} = imagesList[matchImageIndex]

    const filteredList = this.getActiveList(activeTabId)

    return (
      <div className="app-container">
        <nav className="nav-bar">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="score-and-time-container">
            <li className="nav-list-item">
              <p className="score-text">Score: </p>
              <p className="score"> {score}</p>
            </li>

            <li className="nav-list-item">
              <img
                className="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="time">{timer} sec</p>
            </li>
          </ul>
        </nav>
        <div className="game-container">
          {isTimerRunning && (
            <div className="match-game-container">
              <img className="match-image" src={imageUrl} alt="match" />
              <ul className="tabItems-list-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    clickTab={this.clickTab}
                    key={eachTab.tabId}
                    tabDetails={eachTab}
                  />
                ))}
              </ul>
              <ul className="image-items-container">
                {filteredList.map(eachItem => (
                  <ImageItem
                    key={eachItem.id}
                    imageDetails={eachItem}
                    checkMatch={this.checkMatch}
                  />
                ))}
              </ul>
            </div>
          )}
          {!isTimerRunning && <ScoreCard score={score} reset={this.reset} />}
        </div>
      </div>
    )
  }
}

export default MatchGame
