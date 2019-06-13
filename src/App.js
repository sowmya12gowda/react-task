import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Lifecycle from './Lifecycle';
import Names from './Task1/Names';
import Citys from './Task1/Citys';
import Dobs from './Task1/Dobs';
import Login from './Task2/Login';
import Signup from './Task2/Signup';
import Arethmetic from './Task3/Arethmetic';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Names}></Route>
        <Route exact path='/l' component={Lifecycle}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/city' component={Citys}></Route>
        <Route exact path='/dob' component={Dobs}></Route>
        <Route exact path='/sign' component={Signup}></Route>
        <Route exact path='/arth' component={Arethmetic}></Route>
   </Switch>
    </Router>
  );
}

export default App;
