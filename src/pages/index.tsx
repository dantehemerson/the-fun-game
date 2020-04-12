import * as React from 'react'
import CanvasContainer from '../components/CanvasContainer'
import { WIDTH, HEIGHT } from '../contants'
import { Stage, Layer, Star, Text, Rect } from 'react-konva';
import { levels } from '../data/follow-the-line/levels';
import { RectPos } from '../data/types';
import FollowCursor from '../components/FollowCursor';


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
  const [mousePos, setMousePos] = React.useState({ x: 10, y: 10 })

  React.useEffect(() => {
    
  }, [])


  const handleMoveMouse = (event: { evt: MouseEvent }) => {
    console.log("Dante: handleMoveMouse -> event", event.evt)
    setMousePos({ x:  event.evt.offsetX, y: event.evt.offsetY })
  }

  const level = levels[2]

  return (
    <CanvasContainer>
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
