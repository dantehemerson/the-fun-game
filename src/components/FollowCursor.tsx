import * as React from 'react'
import { Pos } from '../types'
import { Rect } from 'react-konva'
import { WIDTH_MOUSE_POINTER } from '../contants'

type FollowCursorProps = {
  pos: Pos
  width?: number
  color?: string
}

const FollowCursor = ({
  pos,
  width = WIDTH_MOUSE_POINTER,
  color = '#1E3888',
}: FollowCursorProps) => {
  return (
    <Rect x={pos.x - width / 2} y={pos.y - width / 2} width={width} height={width} fill={color} />
  )
}

export default FollowCursor
