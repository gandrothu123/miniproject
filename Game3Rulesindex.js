// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const Game3Rules = () => (
  <div className="lite1">
    <div className="bk">
      <Link to="/">
        <button type="button"> back</button>
      </Link>
    </div>
    <div>
      <img
        className="gr"
        src=" https://i.ibb.co/d7NnWwW/animals-2.png"
        alt="d"
      />
      <h1 className="rules">Rules</h1>
      <div className="container">
        <div className="sidesl">
          <ul>
            <li>
              <p>
                When the game3 is started, the users should be able to see the
                list of Cards that are shuffled and turned face down.
              </p>
            </li>

            <li>
              <p>
                When a user starts the game, the user should be able to see the
                Timer running.
              </p>
            </li>
            <li>
              <p>The Timer starts from 2 Minutes.</p>
            </li>
            <li>
              <p>
                If the two cards have the same image, they remain face up. If
                not, they should be flipped face down again after a short 2
                seconds.
              </p>
            </li>
          </ul>
        </div>
        <div className="sidesl">
          <ul>
            <li>
              <p>Users should be able to compare only two cards at a time.</p>
            </li>
            <li>
              <p>
                When the user is not able to find all the cards before the timer
                ends then the game should end and redirect to the Time Up Page.
              </p>
            </li>
            <li>
              <p>
                If the user finds all the matching cards before the timer ends,
                then the user should be redirected to the results page.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/game3">
        <button type="button"> PlayGame</button>
      </Link>
    </div>
  </div>
)

export default Game3Rules

