import * as React from 'react'
import styled from 'styled-components'

type CanvasContainerProps = {
  children: React.ReactChild
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  & canvas {
    cursor: none;
    border: 1px solid blue !important; 
  }
`

const CanvasContainer = (props: CanvasContainerProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default CanvasContainer
