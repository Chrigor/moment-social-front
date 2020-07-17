import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './pages/Signup';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={() => <h1>First</h1>} exact>
        <Redirect to="/signup" />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={() => <h1>Singin</h1>} />
      <Route path="/home" component={() => <h1>Home</h1>} />
      <Route path="*" component={() => <h1>Not found</h1>} />
    </Switch>
  )
};

export default Routes;