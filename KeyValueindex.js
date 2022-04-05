import './index.css'
import {
  CustomButton1,
  CustomButton2,
  CustomButton3,
  CustomButton4,
  CustomImage,
} from './styledComponents'

const KeyValue = props => {
  const {x, listPress, stepUpx, gta} = props
  const {id, url, name, xy} = x

  const onReact = () => {
    console.log('change')
    console.log(!xy)
  }

  const onClicking = () => {
    listPress(url, xy)

    console.log(id)
  }

  return (
    <li className="hy">
      <CustomButton1 type="button" onClick={onClicking}>
        <img src={xy === true ? url : ''} alt={name} className="imgr" />
      </CustomButton1>
    </li>
  )
}
export default KeyValue

