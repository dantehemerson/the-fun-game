import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  font-family: 'Acme';
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  p {
    color: #7d7d7d;
  }
  span {
    font-size: 16px;
    margin-top: 20px;
    color: #e91e63a6;
  }
  b {
    font-size: 18px;
    color: red;
    margin-top: 20px;
    border: 1px dashed red;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 400;
  }
`

type InstructionsProps = {
  warnMobile: boolean
}

const Instructions = ({ warnMobile }: InstructionsProps) => {
  console.log('Dante: Instructions -> warnMobile', warnMobile)
  return (
    <Container>
      <p>* Follow the line without leaving it</p>
      <span>🎵 Activate sounds for a better experience 🎵</span>
      {warnMobile ? <b>This game only support desktop devices</b> : null}
    </Container>
  )
}

export default Instructions
