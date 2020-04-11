import * as React from 'react'
import { Pos } from '../types'
import { Rect } from 'react-konva'

type FollowCursorProps = {
  pos: Pos
  width?: number,
  color?: string
}

const FollowCursor = ({
  pos,
  width = 12,
  color = 'red'
}: FollowCursorProps) => {
  return (
    <Rect 
      x={pos.x - width / 2}
      y={pos.y - width / 2}
      width={width}
      height={width}
      fill={color}
    /> 
  )
}

export default FollowCursor
