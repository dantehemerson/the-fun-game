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
    margin-top: 60px;
    color: #e91e63a6;
  }
`

const Instructions = () => {
  return (
    <Container>
      <p>* Follow the line without leaving it</p> 
      <span>🎵 Activate sounds for a better experience 🎵</span> 
    </Container>
  )
}

export default Instructions
