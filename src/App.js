import React from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Table from './components/Table';
import Charts from './components/Charts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route exact path='/table'>
            <Table />
          </Route>
          <Route exact path='/chart'>
            <Charts />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
