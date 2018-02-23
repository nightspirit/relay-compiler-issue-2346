import React, { Component } from 'react'

// Relay
import {
  graphql,
  QueryRenderer
} from 'react-relay'

import environment from './env'

const query = graphql`
  query appQuery {
    viewer {
      availableAltriaReportsPeriod {
        beginAt
        endAt
        totalCount
      }
    }
  }
`
const variables = {}

class App extends Component {
  render () {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({error, props, retry}) => {
          if (error) {
            return (<div>{error.message}</div>)
          } else if (props) {
            return (
              <div {...props} />
            )
          } else {
            return null
          }
        }}
      />
    )
  }
}

export default App
