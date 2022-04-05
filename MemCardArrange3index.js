import './index.css'

const CardArrange3 = props => {
  const {x, playerList, a} = props
  const {name, id} = x

  const sendIt = () => {
    playerList(id)
  }

  return (
    <li className="a2">
      <button className="b" type="button" onClick={sendIt}>
        {id}
      </button>
    </li>
  )
}

export default CardArrange3

