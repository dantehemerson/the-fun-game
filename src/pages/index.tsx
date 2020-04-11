import * as React from 'react'
import CanvasContainer from '../components/CanvasContainer'
import { WIDTH, HEIGHT } from '../contants'

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
    return (
      <div>
        <CanvasContainer>
          <canvas  width={WIDTH} height={HEIGHT} />
        </CanvasContainer>
      </div>
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
