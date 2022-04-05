import './index.css'

const CardArrange2 = props => {
  const {x, playerList, a} = props
  const {name, id} = x

  const sendIt = () => {
    playerList(id)
  }

  return (
    <li className="a1">
      <button className="b" type="button" onClick={sendIt}>
        {id}
      </button>
    </li>
  )
}

export default CardArrange2

