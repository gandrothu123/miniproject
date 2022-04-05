import {Link} from 'react-router-dom'
import './index.css'

const Game4Rules = () => (
  <div className="lit">
    <div className="back">
      <Link to="/">
        <button type="button" className="back">
          {' '}
          back
        </button>
      </Link>
    </div>
    <div>
      <h1>Memory Matrix Rules</h1>
      <img className="gi" src=" https://i.ibb.co/kyz56gZ/memory.png" alt="n2" />
      <p>rules</p>
      <div className="rowroom">
        <div className="d2">
          <ul>
            <li>
              <p>
                In each level of the Game, Users should be able to see the Grid
                with (N X N) size starting from 3 and the grid will highlight N
                cells in Blue, the N highlighted cells will be picked randomly.
              </p>
            </li>
            <li>
              <p>
                The highlighted cells will remain N seconds for the user to
                memorize the cells. At this point, the user should not be able
                to perform any action.
              </p>
            </li>
            <li>
              <p>
                {' '}
                After N seconds, the grid will clear the N highlighted cells.
              </p>
            </li>
          </ul>
        </div>

        <div className="d2">
          <ul>
            <li>
              <p>
                At N seconds, the user can click on any cell. Clicking on a cell
                that was highlighted before it will turn blue. Clicking on the
                other cells that were not highlighted before then will turn to
                red.
              </p>
            </li>
            <li>
              <p>
                The user should be promoted to the next level if they guess all
                N cells correctly in one attempt.
              </p>
            </li>
            <li>
              <p>
                The user should be taken to the results page if the user clicks
                on the wrong cell.
              </p>
            </li>
            <li>
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Link to="/game4">
      <button type="button"> play game</button>
    </Link>
  </div>
)

export default Game4Rules

