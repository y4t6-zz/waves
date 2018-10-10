import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const Routes = () => {
  return(
      <Layout>
          <Switch>
              <Route path='/' exact component={Home} />
          </Switch>
      </Layout>
  )
}

export default Routes;
