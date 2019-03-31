import React from 'react';
import { Route, Switch } from 'react-router'
import Home from './containers/Home'


const Routes = () => (
  <div>
    <main>
     
        <Route exact path="/" component={Home} />
     
    </main>
  </div>
)

export default Routes;