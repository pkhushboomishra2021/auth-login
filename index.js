import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const domain = "AUTH0_DOMAIN";
const clientId = "AUTH0_CLIENT_ID";

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
