import {Link} from 'react-router-dom'
import './index.css'

const Game2Rules = () => (
  <div className="elite1">
    <div className="bc">
      <Link to="/">
        <button type="button"> back</button>
      </Link>
    </div>
    <div className="">
      <h1>Rock Paper Scisscor Rules</h1>
      <img
        className="i12"
        src="https://i.ibb.co/FHJcjxH/Group-7469.png"
        alt="de"
      />
      <div className="s1">
        <h1 className="hdng">Rules</h1>
        <div className="sidebyside">
          <div className="ls">
            <ul>
              <li>
                <p>
                  The game 2 result should be based on user and user opponent
                  choices
                </p>
              </li>
              <li>
                <p>
                  When the user choice is rock and his opponent choice is rock
                  then the result will be IT IS DRAW
                </p>
              </li>
              <li>
                <p>
                  When the user choice is paper and his opponent choice is rock
                  then the result will be YOU WON
                </p>
              </li>
              <li>
                <p>
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be YOU LOSE
                </p>
              </li>
              <li>
                <p>
                  When the user choice is paper and his opponent choice is paper
                  then the result will be IT IS DRAW
                </p>
              </li>
              <li>
                <p>
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be YOU WON
                </p>
              </li>
            </ul>
          </div>

          <div className="ls">
            <ul>
              <li>
                <p>
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be YOU WON
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be YOU LOSE
                </p>
              </li>
              <li>
                <p>
                  When the user choice is scissors and his opponent choice is
                  scissors then the result will be IT IS DRAW
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  When the result is YOU WON, then the count of the score should
                  be incremented by 1
                </p>
              </li>
              <li>
                <p>
                  When the result is IT IS DRAW, then the count of the score
                  should be the same
                </p>
              </li>
              <li>
                <p>
                  When the result is YOU LOSE, then the count of the score
                  should be decremented by 1.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Link to="/game2">
      <button type="button"> play game</button>
    </Link>
  </div>
)

export default Game2Rules

