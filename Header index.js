import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="abc">
    <h1 className="hn">Games</h1>

    <div className=" s1">
      <div className="g1s ">
        <Link to="/game1rules">
          <img
            className="game1image"
            alt="av"
            src=" https://i.ibb.co/pbKcbNn/Asset-1-4x-1.png"
          />
          <h1 className="hd1">EmojiGame</h1>
        </Link>
      </div>

      <div className="g1s ">
        <Link to="/game2rules">
          <img
            className="game2image"
            alt="av2"
            src="   https://i.ibb.co/FHJcjxH/Group-7469.png"
          />
          <h1 className="hd1">Rock Scisscor Paper</h1>
        </Link>
      </div>
    </div>
    <div className="s1">
      <div className="g1s">
        <Link to="/game3rules">
          <img
            className="game3image"
            alt="av3"
            src="  https://i.ibb.co/d7NnWwW/animals-2.png "
          />
          <h1 className="hd1">Flipping Card Game </h1>
        </Link>
      </div>

      <div className="g1s">
        <Link to="/game4rules">
          <img
            className="game4image"
            alt="av3"
            src="  https://i.ibb.co/kyz56gZ/memory.png "
          />
          <h1 className="hd1"> Memory Matrix Game</h1>
        </Link>
      </div>
    </div>
  </div>
)

export default Header

