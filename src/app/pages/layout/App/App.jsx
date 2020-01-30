import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Header from '../Header';
import Footer from '../Footer';
import './App.scss';
import { getProducts } from '../../../store/actions/ProductActions';
import AppProvider from '../../../contexts/AppProvider';
import Products from '../../../components/Products';
import Properties from '../../../components/Properties';
import Tools from '../../../components/Tools';
import Canvas from '../../../components/Canvas';

const propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

const defaultProps = {};

function App({ store }) {
  store.dispatch(getProducts());
  return (
    <AppProvider store={store}>
      <StrictMode>
        <Header />
        <main>
          <DndProvider backend={Backend}>
            <Products />
            <Properties />
            <Tools />
            <Canvas />
          </DndProvider>
        </main>
        <Footer />
      </StrictMode>
    </AppProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
