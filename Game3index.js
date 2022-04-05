// Write your code here
import {Link} from 'react-router-dom'

import ReactCardFlip from 'react-card-flip'

import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Game3WinLoseCard from '../Game3WinLoseCard'
import Game1 from '../Game1'

import KeyValue from '../KeyValue'

import './index.css'

const animalsList = [
  {id: 0, url: 'https://i.ibb.co/VYqc3MQ/Layer-2-1.png', name: 'r1', xy: true},
  {
    id: 1,
    url: 'https://i.ibb.co/71VVRbG/Group-7479.png',
    name: 'r2',
    xy: true,
  },
  {
    id: 2,
    url: ' https://i.ibb.co/jgrrWc4/Group-7476.png',
    name: 'r3',
    xy: true,
  },
  {
    id: 3,
    url: 'https://i.ibb.co/P5KgnCC/Group-7477-1.png',
    name: 'r4',
    xy: true,
  },
  {id: 4, url: 'https://i.ibb.co/VYqc3MQ/Layer-2-1.png', name: 'r1', xy: true},
  {
    id: 5,
    url: 'https://i.ibb.co/71VVRbG/Group-7479.png',
    name: 'r2',
    xy: true,
  },
  {
    id: 6,
    url: ' https://i.ibb.co/jgrrWc4/Group-7476.png',
    name: 'r3',
    xy: true,
  },
  {
    id: 7,
    url: 'https://i.ibb.co/P5KgnCC/Group-7477-1.png',
    name: 'r4',
    xy: true,
  },
  {
    id: 8,
    url: ' https://i.ibb.co/1fjLtBF/Group-7485.png',
    name: 'r5',
    xy: true,
  },
  {
    id: 9,
    url: ' https://i.ibb.co/1fjLtBF/Group-7485.png',
    name: 'r5',
    xy: true,
  },
  {
    id: 10,
    url: '  https://i.ibb.co/V2RmTxd/Group-7481.png',
    name: 'r6',
    xy: true,
  },
  {
    id: 11,
    url: '  https://i.ibb.co/V2RmTxd/Group-7481.png',
    name: 'r6',
    xy: true,
  },
  {
    id: 12,
    url: '  https://i.ibb.co/qC1WYHW/Group-7482.png ',
    name: 'r7',
    xy: true,
  },
  {
    id: 13,
    url: ' https://i.ibb.co/qC1WYHW/Group-7482.png ',
    name: 'r7',
    xy: true,
  },
  {
    id: 14,
    url: '  https://i.ibb.co/BZrTycx/Group-7475.png ',
    name: 'r8',
    xy: true,
  },
  {
    id: 15,
    url: '  https://i.ibb.co/BZrTycx/Group-7475.png ',
    name: 'r8',
    xy: true,
  },
  {
    id: 16,
    url: '   https://i.ibb.co/0QCry5b/Layer-2-4.png ',
    name: 'r9',
    xy: true,
  },
  {
    id: 17,
    url: '   https://i.ibb.co/0QCry5b/Layer-2-4.png ',
    name: 'r9',
    xy: true,
  },
  {
    id: 18,
    url: '    https://i.ibb.co/ZH5rqkY/Group-7480.png ',
    name: 'r9',
    xy: true,
  },
  {
    id: 19,
    url: '   https://i.ibb.co/ZH5rqkY/Group-7480.png',
    name: 'r9',
    xy: true,
  },
]

class Game3 extends Component {
  state = {
    g: 0,
    s: 0,
    isTimerRunning: false,
    sd: 1,
    z: 1,
    sAr: [],
    l: [],
    l2: animalsList.sort(() => Math.random() - 0.4),
    count: 0,
    score: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    na: [],
    timeElapsedInSeconds: 0,
    timerLimitInMinutes: 2,
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false, a: 1, z: 0})
      this.renderScoreCard()
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onStartOrPauseTimer = () => {
    const {
      isTimerRunning,
      timeElapsedInSeconds,
      timerLimitInMinutes,
    } = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60
    console.log(isTimerRunning)
    console.log(timeElapsedInSeconds)
    console.log('timeElapsedInSeconds')
    console.log('istimercompleted')
    console.log(isTimerCompleted)

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
      console.log('game over')
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
      this.setState({s: 1})
      console.log('2 nd console')
      this.renderScoreCard()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState({isTimerRunning: !isTimerRunning})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  resetGame = () => {
    const l5 = animalsList.sort(() => Math.random() - 0.4)
    this.setState({l2: l5, score: 0})

    this.setState({
      s: 0,
      isTimerRunning: false,
      sd: 1,
      z: 1,
      sAr: [],

      count: 0,
      score: 0,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,

      timeElapsedInSeconds: 0,
      timerLimitInMinutes: 2,
    })
  }

  listPress = (url, xy) => {
    const {g1, na, l2} = this.state
    console.log(' list pressxy')

    this.setState({g1: g1 + 1, xy: !xy})

    this.setState(prevState => ({na: [...prevState.na, url]}))
  }

  scr = () => {
    const {na, score} = this.state
    if (na[0] === na[1]) {
      console.log('match')
      this.setState({score: score + 1})
    } else {
      console.log('no match')
      console.log(na)
    }

    this.setState({na: []})
  }

  renderScoreCard = () => {
    const {clickedEmojisList, c, isTimerRunning, score} = this.state
    const isWon = score === 6
    console.log(c)
    console.log(isWon)
    console.log('happy end render score card')

    return <Game1 />
  }

  render() {
    const {s, sd, z, a, score, count, sAr, na, l2, g} = this.state

    if (na.length % 2 === 0 && na.length !== 0) {
      console.log('over')
      this.scr()
    }

    if (score === 6) {
      this.renderScoreCard()
    }

    if (s === 0) {
      this.onStartOrPauseTimer()
    }
    if (z === 0) {
      const isWon = 'won'

      return <Game3WinLoseCard isWon={score} resetGame={this.resetGame} />
    }

    if (z === 1) {
      return (
        <div className="sera">
          <h1 className="mh">Memory Flipping Card Game </h1>

          <p className="elapsed-time">{this.getElapsedSecondsInTimeFormat()}</p>
          <p>score : {score}</p>
          <div>
            {' '}
            <Link to="/game3rules">
              <button type="button"> back</button>
            </Link>
            <Popup
              trigger={<button className="btn2"> Rules </button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header text-center"> Rules </div>

                  <div className="content">
                    {' '}
                    <div>
                      <ul>
                        <li>
                          When the game is started, the users should be able to
                          see the list of Cards that are shuffled and turned
                          face down. Users should be able to compare only two
                          cards at a time.
                        </li>
                        <li>
                          {' '}
                          When a user starts the game, the user should be able
                          to see the Timer running.
                        </li>{' '}
                        <li>
                          When the user is not able to find all the cards before
                          the timer ends then the game should end and redirect
                          to the Time Up Page. The Timer starts from 2 Minutes.
                        </li>
                        <li>
                          {' '}
                          If the user finds all the matching cards before the
                          timer ends, then the user should be redirected to the
                          results page.
                        </li>
                        <li>
                          If the two cards have the same image, they remain face
                          up. If not, they should be flipped face down again
                          after a short 2 seconds.
                        </li>
                      </ul>
                    </div>
                    <div>
                      {' '}
                      <ul>
                        <li>
                          When the game is started, the users should be able to
                          see the list of Cards that are shuffled and turned
                          face down. Users should be able to compare only two
                          cards at a time.
                        </li>
                        <li>
                          {' '}
                          When a user starts the game, the user should be able
                          to see the Timer running.
                        </li>{' '}
                        <li>
                          When the user is not able to find all the cards before
                          the timer ends then the game should end and redirect
                          to the Time Up Page. The Timer starts from 2 Minutes.
                        </li>
                        <li>
                          {' '}
                          If the user finds all the matching cards before the
                          timer ends, then the user should be redirected to the
                          results page.
                        </li>
                        <li>
                          If the two cards have the same image, they remain face
                          up. If not, they should be flipped face down again
                          after a short 2 seconds.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>

          <div className="l2">
            {g !== 0 && g % 2 === 0 ? this.checkIt() : ''}

            <ul className="fg1">
              {l2.map(x => (
                <KeyValue
                  listPress={this.listPress}
                  x={x}
                  stepUpx={this.stepUpx}
                  id={x.id}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div>
        <h1>hai</h1>
      </div>
    )
  }
}
export default Game3

