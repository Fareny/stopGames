import React from 'react';
import './styles/common.css';
import './styles/normalize.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Pages/Main';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
