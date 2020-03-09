import React, { lazy, StrictMode, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import { getLabels } from '../../../store/actions/LabelActions';
import { getDatabases } from '../../../store/actions/DatabaseActions';
import AppProvider from '../../../contexts/AppProvider';

const NotFound = lazy(() => import('../NotFound'));
const Home = lazy(() => import('../Home'));
const Pdf = lazy(() => import('../Pdf'));

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
  store.dispatch(getDatabases());
  return (
    <AppProvider store={store}>
      <StrictMode>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pdf/:id" component={Pdf} />
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
