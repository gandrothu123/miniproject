import './index.css'
import {CustomButtonx, CustomLi} from './styledComponents'

const CardArrange = props => {
  const {x, playerList, a} = props
  const {name, id} = x

  const sendIt = () => {
    playerList(id)
  }

  return (
    <CustomLi a={a}>
      <button className="b" type="button" onClick={sendIt}>
        {id}
      </button>
    </CustomLi>
  )
}

export default CardArrange

