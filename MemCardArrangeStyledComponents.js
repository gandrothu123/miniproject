import styled from 'styled-components'

export const CustomButtonx = styled.button`
  width: ${props => (props.a === true ? '28%' : '50%')};
  list-style-type: none;
  height: 140px;
  background-color: aqua;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const CustomLi = styled.li`
  width: ${props => (props.a === 0 ? '33%' : '16%')};
  list-style-type: none;
  height: 140px;
  background-color: aqua;
  margin-top: 8px;
  margin-bottom: 8px;
`

