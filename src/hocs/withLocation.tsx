import * as React from 'react'
import { Location } from '@reach/router'
import * as queryString from 'query-string'

export const withLocation = <P extends object>(ComponentToWrap: React.ComponentType<P>) => (props: object) => (
  <Location>
    {
      ({ location, navigate }) => (
        <ComponentToWrap
          {
            ...{
              ...props,
              location,
              navigate,
              search: location.search ? queryString.parse(location.search) : {}
            } as P
          }
        />
      )
    }
  </Location>
)