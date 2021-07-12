import React from 'react';

import ReactDOM from "react-dom";
// import { ApolloProvider } from "react-apollo";
import { ApolloClient } from '@apollo/client';
import {ApolloProvider} from '@apollo/client'
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from '@apollo/client';

import App from "./App";
// import * as serviceWorker from "./serviceWorker";


const httpLink = createHttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);

// serviceWorker.unregister();