import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Collection from './components/collection/Collection';
import Featured from './components/featured/Featured';
import Offer from './components/offer/Offer';
import New from './components/new/New';
import Newletter from './components/newletter/Newletter';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    
      {/* === HEADER ===== */}
      <Header/>
      <main className="l-main">
         <Home/>
         <Collection/>
         <Featured/> 
         <Offer/>
         <New/>
         <Newletter/>
         <Sponsors/>
      </main>
      
      {/* === FOOTER ===== */}
      <Footer/>
    </>
  );
}

export default App;
