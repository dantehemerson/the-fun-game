import * as React from 'react'
import styled from 'styled-components'
import Instructions from './Instructions'

const Container = styled.div`
  width: 100%;
  height: 100%;
   background: #fcfcfc;
  position: relative;
`

const ButtonStart = styled.div`
  position: absolute;
  right: 58px;
  padding: 2px 24px;
  background: #4a7184;
  border-radius: 4px;
  border: 1px solid #395c6d;
  font-size: 22px;
  font-family: sans-serif;
  font-family: 'Acme';
  transition: .3s;
  font-weight: 600;
  cursor: pointer;
  color: white;
  &:hover {
    background: #395c6d;
  }
  bottom: 46px;
`

const Title = styled.p`
  text-transform: uppercase;
	background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 74px;
  font-weight: 600;
  margin-top: 100px;
  text-align: center;
  font-family: 'Acme';
`

type MenuProps = {
  onClick: () => any
}

const Menu = (props: MenuProps) => {
  return (
    <Container>
      <Title>The Fun Game</Title>
      <Instructions /> 
      <ButtonStart onClick={props.onClick}>
        START 
      </ButtonStart> 
    </Container>
  )
}

export default Menu
