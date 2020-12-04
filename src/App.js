import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Principal from './pages/Principal';

// router
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <>
    <Router>
      {/* === HEADER ===== */}
      <Header/>
      
      <main className="l-main">
          <Switch>
            <Route path="/" exact render={()=><Principal/>}/>
            <Route path="/compras" exact render={()=><Product/>}/>
          </Switch>
         
      </main>
      
      {/* === FOOTER ===== */}
      <Footer/>
      </Router>
    </>
  );
}

export default App;
