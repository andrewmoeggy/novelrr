import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* // switch matches first url then stops // */}
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
