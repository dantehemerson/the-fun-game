import { RectPos } from '../data/types'
import { Pos } from '../types'
import { WIDTH_MOUSE_POINTER } from '../contants'

const MIDDLE = WIDTH_MOUSE_POINTER / 2
export function isInsideRect(rect: RectPos, pos: Pos): boolean {
  if (
    pos.x - MIDDLE >= Math.min(rect.x1, rect.x2) &&
    pos.x + MIDDLE <= Math.max(rect.x1, rect.x2) &&
    pos.y - MIDDLE >= Math.min(rect.y1, rect.y2) &&
    pos.y + MIDDLE <= Math.max(rect.y1, rect.y2)
  ) {
    return true
  }
  return false
}

export function isInsideRects(rects: RectPos[], pos: Pos) {
  return rects.some(rect => isInsideRect(rect, pos))
}
