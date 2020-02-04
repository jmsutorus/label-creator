import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Header from '../Header';
import Footer from '../Footer';
import './App.scss';
import { getLabels } from '../../../store/actions/LabelActions';
import AppProvider from '../../../contexts/AppProvider';
import Tools from '../../../components/Tools';
import Canvas from '../../../components/Canvas';
import LabelsList from '../../../components/LabelsList';
import LabelForms from './LabelForms';

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
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ flex: 1, overflow: 'auto' }}>
            <DndProvider backend={Backend}>
              <Tools />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Canvas />
                <LabelForms />
              </div>
              <LabelsList />
            </DndProvider>
          </main>
          <Footer />
        </div>
      </StrictMode>
    </AppProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
