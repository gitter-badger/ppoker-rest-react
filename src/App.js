import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';

function App() {
  return (
    <Router>
      <main className="flex flex-col font-sans">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Home} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
