import React from 'react';
import Header from './components/Header/Header';
import LeftPart from './components/LeftPart/Left';
import RightPart from './components/RightPart/Right';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <LeftPart />
        <RightPart />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
