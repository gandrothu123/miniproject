// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const GameRules1 = () => (
  <div className="l1">
    <Link to="/">
      <button type="button"> back</button>
    </Link>

    <div className=" flexrow ">
      <div>
        <img
          className="rpg"
          src="https://i.ibb.co/pbKcbNn/Asset-1-4x-1.png"
          alt="a2"
        />
      </div>
      <div>
        <h1>rules</h1>
        <ul>
          <li>
            <p>user should be able to see the list of Emojis</p>{' '}
          </li>
          <li>
            <p>
              When user clicks any one of the Emoji for the first time,
              <p>
                then count of the score should be incremented by 1 and emoji
                cards should be shuffled
              </p>
            </p>
          </li>
          <li>
            <p>
              Process should be repeated everytime user clicks on an emoji card
            </p>
          </li>
          <li>
            <p>
              when the users clicks on emoji cards withoout clicking it
              twice,then user wins
            </p>
          </li>
          <li>
            <p>When user clicks for the second time,he loses</p>
          </li>
          <li>
            <p>Once user loses he will be directed to the results page </p>
          </li>
        </ul>
      </div>{' '}
    </div>

    <Link to="/game1">
      <button type="button"> PlayGame</button>
    </Link>
  </div>
)

export default GameRules1

