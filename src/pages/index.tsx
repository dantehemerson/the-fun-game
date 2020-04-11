import * as React from 'react'

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
        Hola
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
