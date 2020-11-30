import React from "react";
import App from "../App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const PROD_SERVER = "https://gestion-vehiculos-api-graph.herokuapp.com/";
// const DEV_SERVER = "http://localhost:4000";

const httpLink = createHttpLink({
  uri: PROD_SERVER,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
