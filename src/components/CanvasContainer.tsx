import * as React from 'react'

type CanvasContainerProps = {
  children: React.ReactChild
}

const CanvasContainer = (props: CanvasContainerProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default CanvasContainer
