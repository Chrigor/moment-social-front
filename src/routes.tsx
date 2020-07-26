import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import ActiveAccount from './pages/ActiveAccount';
import Feed from './pages/Feed';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={() => <h1>First</h1>} exact>
        <Redirect to="/signin" />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/activeAccount" component={ActiveAccount} />
      <Route path="/signin" component={SignIn} />
      <Route path="/feed" component={Feed} />
      <Route path="*" component={() => <h1>Not found</h1>} />
    </Switch>
  )
};

export default Routes;