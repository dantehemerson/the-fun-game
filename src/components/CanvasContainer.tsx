import * as React from 'react'
import styled from 'styled-components'

type CanvasContainerProps = {
  children: React.ReactChild,
  started?: boolean
}

const Container: any = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    cursor: ${props => !(props as any).started ? 'default' : 'none'};
    width: 810px;
    height: 610px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue !important; 
  }
`

const CanvasContainer = (props: CanvasContainerProps) => {
  return (
    <Container started={props.started}>
      <div>
        {props.children}
      </div>
    </Container>
  )
}

export default CanvasContainer
