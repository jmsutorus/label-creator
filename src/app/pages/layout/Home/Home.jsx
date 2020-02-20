import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Header from '../Header';
import Footer from '../Footer';
import Tools from '../../../components/Tools';
import Canvas from '../../../components/Canvas';
import LabelsList from '../../../components/LabelsList';
import LabelForms from '../App/LabelForms';

function Home() {
  return (
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
  );
}

export default Home;
