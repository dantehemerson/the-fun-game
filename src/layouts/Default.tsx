import * as React from 'react'
import { Helmet } from 'react-helmet'


export const DefaultLayout = (props: any) => {
    return (
      <React.Fragment>
          <Helmet titl='laksjd'>
          <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"/>
           <title>The Fun Game</title>
          </Helmet>
          {props.children}
        </React.Fragment>
    )
}