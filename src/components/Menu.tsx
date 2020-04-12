import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ButtonStart = styled.div`
  position: absolute;
  right: 50px;
  padding: 10px 20px;
  background: red;
  border-radius: 4px;
  font-size: 20px;
  font-family: sans-serif;
  transition: .3s;
  font-weight: 600;
  cursor: pointer;
  color: blue;
  &:hover {
    background: darkred;
  }
  bottom: 40px;
`

type MenuProps = {
  onClick: () => any
}

const Menu = (props: MenuProps) => {
  return (
    <Container>
      <ButtonStart onClick={props.onClick}>
        START 
      </ButtonStart> 
    </Container>
  )
}

export default Menu
