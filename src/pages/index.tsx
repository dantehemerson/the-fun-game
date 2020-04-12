import * as React from 'react'
import CanvasContainer from '../components/CanvasContainer'
import { WIDTH, HEIGHT } from '../contants'
import { Stage, Layer, Star, Text, Rect } from 'react-konva';
import { levels } from '../data/follow-the-line/levels';
import { RectPos } from '../data/types';
import FollowCursor from '../components/FollowCursor';
import { Pos } from '../types';
import { isInsideRect, isInsideRects } from '../utils/follo-the-line.utils';
import Menu from '../components/Menu';
import HappyFinal from '../components/HappyFinal';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props: IndexPageProps) => {
  const [mousePos, setMousePos] = React.useState<Pos>({ x: 700, y: 550 })
  const level = levels[2]
  const [started, setStart] = React.useState(false)


  const rects = level.slice(0, level.length - 1)


  React.useEffect(() => {
    const end = level[level.length  - 1]
    if(isInsideRect(end, mousePos)) {
      console.log('You Win!!!')
      return
    }

    if(!isInsideRects(rects, mousePos)) {
      console.log('Make me fun')
    }
  }, [mousePos])

  const handleMoveMouse = (event: { evt: MouseEvent }) => {
    const x = event.evt.offsetX
    const y = event.evt.offsetY
    setMousePos({ x , y })
  }


  return (
    <CanvasContainer started={started}>
      <React.Fragment>
      {
        started ? 
        <Stage width={WIDTH} height={HEIGHT} onMouseMove={handleMoveMouse}>
            <Layer>
              {
                level.map((rect: RectPos, key) => (
                  <Rect
                    x={rect.x1}
                    key={key}
                    y={rect.y1}
                    width={rect.x2 - rect.x1}
                    height={rect.y2 - rect.y1}
                    fill={rect.color ? rect.color : 'skyblue'}
                  />
                ))
              }
              <FollowCursor pos={mousePos} />
            </Layer>
          </Stage>
        : <Menu onClick={() => setStart(true)} />
      }
      <HappyFinal show={true}/>
      </React.Fragment>
    </CanvasContainer>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default Index
