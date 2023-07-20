import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./AuthContext"

ReactDOM.render(
<AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);