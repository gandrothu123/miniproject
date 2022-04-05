import {Component} from 'react'
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const ROCK_IMAGE = 'https://i.ibb.co/1MYQ7Pj/Group-6941.png'
const PAPER_IMAGE = 'https://i.ibb.co/Z6DMzT3/Paper.png'
const SCISSOR_IMAGE = 'https://i.ibb.co/pWJbgV9/Group-6940.png'

const WIN_EMOJI = 'https://i.ibb.co/BCdppk0/Emoji.png'
const LOSE_EMOJI = 'https://i.ibb.co/VWCvZYf/Emoji-2.png'
const DRAW_EMOJI = 'https://i.ibb.co/nCRFggF/Emoji-1.png'

const WIN_IMAGE = 'https://i.ibb.co/CMzFJbT/Group-7618.png'
const LOSE_IMAGE = 'https://i.ibb.co/chfCCMF/Group-7618-2.png'
const DRAW_IMAGE = 'https://i.ibb.co/JqFjcQK/Group-7618-1.png'

class RockScissor2 extends Component {
  state = {
    a: 3,
    res1: '',
    res: '',
    s: 0,
    z: '',
    ui: '',
    ci: '',
    re: '',
    wul: '',
    score: 0,
  }

  componentDidMount = () => {
    const l1 = ['rock', 'paper', 'scissor']
    const res1 = l1[Math.floor(Math.random() * 3)]
    this.setState({res1})
    if (res1 === 'rock') {
      this.setState({ci: ROCK_IMAGE})
    }

    if (res1 === 'paper') {
      this.setState({ci: PAPER_IMAGE})
    }

    if (res1 === 'scissor') {
      this.setState({ci: SCISSOR_IMAGE})
    }
  }

  timerID = () => {
    this.intervalId = setInterval(this.click, 1000)
  }

  click = () => {
    const {a} = this.state

    if (a === 0) {
      this.setState({a: 3})
      console.log(a)
    } else {
      this.setState(prevState => ({a: prevState.a - 1}))
    }
  }

  click1 = () => {
    const {res1, z, re, ui, wul, score} = this.state
    this.setState({res: 'rock', s: 1, ui: ROCK_IMAGE})

    if (res1 === 'paper') {
      console.log('lose')
      this.setState({z: 'lose', re: LOSE_EMOJI, wul: LOSE_IMAGE})
      this.setState({score: score - 1})
    }
    if (res1 === 'rock') {
      console.log('draw')
      this.setState({z: 'draw', re: DRAW_EMOJI, wul: DRAW_IMAGE})
      this.setState({score})
    }
    if (res1 === 'scissor') {
      console.log('win')
      this.setState({z: 'win', re: WIN_EMOJI, wul: WIN_IMAGE})
      this.setState(prevState => ({score: score + 1}))
    }

    this.timerID()
  }

  click2 = () => {
    const {res1, z, ui, re, wul, score} = this.state
    this.setState({res: 'paper', s: 1, ui: PAPER_IMAGE})

    if (res1 === 'paper') {
      console.log('draw')
      this.setState({z: 'draw', re: DRAW_EMOJI, wul: DRAW_IMAGE})
      this.setState({score})
    }
    if (res1 === 'rock') {
      console.log('win')
      this.setState({z: 'win', re: WIN_EMOJI, wul: WIN_IMAGE})
      this.setState(prevState => ({score: score + 1}))
    }
    if (res1 === 'scissor') {
      console.log('lose')
      this.setState({z: 'lose', re: LOSE_EMOJI, wul: LOSE_IMAGE})
      this.setState({score: score - 1})
    }

    this.timerID()
  }

  click3 = () => {
    const {res1, z, ui, re, wul, score} = this.state
    this.setState({res: 'scissor', s: 1, ui: SCISSOR_IMAGE})

    if (res1 === 'paper') {
      console.log('win')
      this.setState({z: 'win', re: WIN_EMOJI, wul: WIN_IMAGE})
      this.setState(prevState => ({score: score + 1}))
    }
    if (res1 === 'rock') {
      console.log('lose')
      this.setState({z: 'lose', re: LOSE_EMOJI, wul: LOSE_IMAGE})
      this.setState({score: score - 1})
    }
    if (res1 === 'scissor') {
      console.log('draw')
      this.setState({z: 'draw', re: DRAW_EMOJI, wul: DRAW_IMAGE})
      this.setState({score})
    }

    this.timerID()
  }

  reset = () => {
    const {a, res, s, res1, ui, score} = this.state

    this.setState({a: 3, res: '', s: 0, score: 0})
  }

  render() {
    const {a, ui, p, res, z, s, wul, re, res1, ci, score} = this.state
    console.log(a)
    console.log(res1)

    console.log(res)

    if (a === 0) {
      clearInterval(this.intervalId)
    }

    return (
      <div className="row">
        <Link to="/game2rules">
          {' '}
          <button type="button" className="btn1">
            Back
          </button>
        </Link>

        <div className="mid1">
          <h1 className="h1d">Rock Paper Scisccor</h1>
          {s === 0 ? (
            <p className="p1d">Let's Pick</p>
          ) : (
            <div className="row1rps">
              <div className="rps">
                <p>rock</p>
                <p>paper</p>
                <p>scisccor</p>
              </div>{' '}
              {a === 0 ? (
                <img src={wul} className="rps" alt="sd" />
              ) : (
                <p className="rps2">hi</p>
              )}
              {a === 0 ? <p>score:{score}</p> : <p>score: </p>}
            </div>
          )}
          {s === 0 ? (
            ''
          ) : (
            <button type="button" onClick={this.reset}>
              Play Again
            </button>
          )}
          {s === 0 ? (
            <div>
              <div className="f1class">
                <button onClick={this.click1} className="bn" type="button">
                  <img
                    alt="i1"
                    className="rock1"
                    src="https://i.ibb.co/1MYQ7Pj/Group-6941.png"
                  />
                </button>
                <div>
                  {' '}
                  <p>Rock</p>
                  <img
                    alt="i1"
                    className="arrows"
                    src=" https://i.ibb.co/fMmVxrm/arrow-right-alt.png"
                  />
                </div>

                <button onClick={this.click2} className="bn" type="button">
                  <img
                    alt="i2"
                    className="rock1"
                    src="https://i.ibb.co/Z6DMzT3/Paper.png"
                  />
                </button>
              </div>

              <div className="f2class">
                <div>
                  {' '}
                  <p>scisscor</p>
                  <img
                    alt="i1"
                    className="arrows "
                    src="   https://i.ibb.co/djscgC8/arrow-right-alt.png"
                  />
                </div>

                <button onClick={this.click3} className="bn" type="button">
                  <img
                    alt="i3"
                    className="rock1"
                    src="https://i.ibb.co/pWJbgV9/Group-6940.png"
                  />
                </button>
                <div>
                  {' '}
                  <p>paper</p>
                  <img
                    alt="i1"
                    className="arrows"
                    src="  https://i.ibb.co/RTngLNh/arrow-right-dwn-alt.png"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>
              {a === 0 ? (
                <div className="row1">
                  <div>
                    {' '}
                    <p className="bn">player: {res}</p>{' '}
                    <img src={ui} alt="i1i" />
                  </div>
                  <div>
                    {' '}
                    <p className="bn">result: {z}</p>
                    <img src={re} alt="emj" />
                  </div>

                  <div>
                    <p className="bn">computer: {res1}</p>
                    <img src={ci} alt="i3i" />
                  </div>
                </div>
              ) : (
                <div className="row1">
                  <div>
                    <p className="bn">player: {res}</p>
                    <img src={ui} alt="i10" />
                  </div>

                  <p className="bn">{a}</p>
                  <div>
                    <p className="bn">computer: {res1}</p>
                    <img src={ci} alt="i30" />
                  </div>
                </div>
              )}
            </p>
          )}
        </div>

        <Popup trigger={<button className="btn2"> Rules </button>} modal nested>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header text-center"> Rules </div>

              <div className="content">
                {' '}
                <ul>
                  <li>
                    <p>
                      The game result should be based on user and user opponent
                      choices
                    </p>
                  </li>

                  <li>
                    <p>
                      When the user choice is rock and his opponent choice is
                      rock then the result will be IT IS DRAW
                    </p>
                  </li>
                  <li>
                    <p>
                      When the user choice is paper and his opponent choice is
                      rock then the result will be YOU WON
                    </p>
                  </li>
                  <li>
                    <p>
                      When the user choice is a scissor and his opponent choice
                      is rock then the result will be YOU LOSE
                    </p>
                  </li>
                  <li>
                    When the user choice is paper and his opponent choice is
                    paper then the result will be IT IS DRAW
                  </li>
                  <li>
                    When the user choice is scissors and his opponent choice is
                    paper then the result will be YOU WON
                  </li>
                </ul>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <p>
                      When the user choice is rock and his opponent choice is
                      scissors then the result will be YOU WON
                    </p>
                  </li>
                  <br />
                  <li>
                    <p>
                      When the user choice is paper and his opponent choice is
                      scissors then the result will be YOU LOSE
                    </p>
                  </li>
                  <li>
                    <p>
                      When the user choice is scissors and his opponent choice
                      is scissors then the result will be IT IS DRAW
                    </p>
                  </li>
                  <li>
                    <p>
                      When the result is YOU WON, then the count of the score
                      should be incremented by 1
                    </p>
                  </li>
                  <li>
                    When the result is IT IS DRAW, then the count of the score
                    should be the same
                  </li>
                  <li>
                    When the result is YOU LOSE, then the count of the score
                    should be decremented by 1.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default RockScissor2

