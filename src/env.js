import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      // Add authentication and other headers here
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)
const env = new Environment({
  network,
  store
})

export default env
