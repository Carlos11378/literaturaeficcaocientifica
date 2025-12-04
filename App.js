import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book/:id" component={BookDetails} />
      </Switch>
    </div>
  );
};

export default App;
