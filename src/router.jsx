import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from 'components/home';
import Routes from 'constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.ROOT} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
