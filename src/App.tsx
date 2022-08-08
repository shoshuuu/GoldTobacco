import React from 'react';

import Nav from './components/nav/nav.component';
import Header from './components/header/header.component';
import Main from './pages/main/main.component';
import RawTobaccos from './pages/raw_tobaccos/raw_tobaccos.component';
import Banner from './components/banner/banner.component';

import './App.styles.scss';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
