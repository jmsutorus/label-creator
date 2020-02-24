import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import initialize from './initialize';
import App from './app/pages/layout/App/App';
import store from './app/store/create';
import './app/styles/styles.scss';

initialize({ store });

// use hydrate you we move to server side html rendering
if (document.getElementById('root')) {
  render(<App location={window.location} store={store} />, document.getElementById('root'));
}

serviceWorker.register();
