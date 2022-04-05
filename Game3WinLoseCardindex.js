import './index.css'

const i1 = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const i2 = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const Game3WinLoseCard = props => {
  const {isWon, resetGame} = props
  const resImag = isWon === 6 ? i1 : i2

  const status = isWon ? 'Congratulations' : 'Better Luck Next Time'
  const time = isWon
    ? 'You have reached the score in time'
    : 'You have not reached the score in time'

  const resetPlay = () => {
    resetGame()
  }

  return (
    <div className="con1">
      <img src={resImag} />
      <h1>{status}</h1>
      <p>no. of flips</p>
      <p>{time}</p>
      <button type="button" onClick={resetPlay}>
        PLay Again
      </button>
    </div>
  )
}
export default Game3WinLoseCard

