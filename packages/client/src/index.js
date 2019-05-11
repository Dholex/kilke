import './icons.sass';

import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';

import { createApiClient } from './api';
import App from './components/App';
import createStore from './state';
import createTheme from './theme';
import createApolloClient from './apolloClient';

import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const {
  REACT_APP_API_URL: apiUrl,
  REACT_APP_GRAPHQL_URI: graphqlUri,
} = process.env;

const history = createBrowserHistory();
const apiClient = createApiClient({ url: apiUrl });
const apolloClient = createApolloClient({ uri: graphqlUri });

const store = createStore({
  httpClient: axios,
  apiClient,
  history,
});

const theme = createTheme();

render(
  <App
    store={store}
    theme={theme}
    history={history}
    apiClient={apiClient}
    apolloClient={apolloClient}
  />,
  document.getElementById('root'),
);
