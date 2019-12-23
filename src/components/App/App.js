import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Reader from '../Reader';
import publications from '../../publications.json';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/reader"
        /* eslint-disable-next-line */
        render={props => <Reader {...props} items={publications} />}
      />
      <Redirect from="/" to="/reader" />
    </Switch>
  </BrowserRouter>
);

export default App;
