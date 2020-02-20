import React, { lazy, StrictMode, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import { getLabels } from '../../../store/actions/LabelActions';
import AppProvider from '../../../contexts/AppProvider';
// import NotFound from '../NotFound';
// import Home from '../Home';
const NotFound = lazy(() => import('../NotFound'));
const Home = lazy(() => import('../Home'));
const Pdf = lazy(() => import('../Pdf'));
// import Pdf from '../Pdf';

const propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

const defaultProps = {};

function App({ store }) {
  store.dispatch(getLabels());
  return (
    <AppProvider store={store}>
      <StrictMode>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pdf" component={Pdf} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StrictMode>
    </AppProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
