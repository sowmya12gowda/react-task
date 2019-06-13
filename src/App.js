import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Lifecycle from './Lifecycle';
import Names from './Task1/Names';
import Citys from './Task1/Citys';
import Dobs from './Task1/Dobs';
import Login from './Task2/Login';
import Signup from './Task2/Signup';
import Arethmetic from './Task3/Arethmetic';
import Input from './Task4/Input';
// import Same from './Task4/Same';
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
        <Route exact path='/inp' component={Input}></Route>
        {/* <Route exact path='/same' component={Same}></Route> */}
    
    
   </Switch>
    </Router>
  );
}

export default App;
// import React, { Component } from 'react';
// import User from './User';
// import UniqueID from 'react-html-id';
// class App extends Component {

// constructor(){
// debugger;
// super();
// UniqueID.enableUniqueIds(this);
// this.state = {
// users:[
// {id:this.nextUniqueId(), name:'John', age:20},
// {id:this.nextUniqueId(), name:'Jill', age:30},
// {id:this.nextUniqueId(), name:'Peter', age:40},
// ]
// };

// console.log(this.state)
// }

// deleteUser = (index, e) => {
// debugger
// console.log(this.nextUniqueId())
// const users = Object.assign([], this.state.users);
// users.splice(index, 1);
// this.setState({users:users});
// }

// changeUserName = (id, event) => {
// if (event.target.value.length === 0) {
// return;
// }
// const index = this.state.users.findIndex((user)=> {
// return (user.id === id);
// })

// const user = Object.assign({}, this.state.users[index]);
// user.name = event.target.value;

// const users = Object.assign([], this.state.users);
// users[index] = user;

// this.setState({users:users});
// }

// render(){

// return (
// <div>
// <ul>
// {
// this.state.users.map((user, index) => {
// return (<div><User
// delEvent={this.deleteUser.bind(this,index)}
// age={user.age}
// changeEvent={this.changeUserName.bind(this, user.id)}
// key={user.id } >{user.name}</User></div>)
// })
// }
// </ul>
// </div>
// )
// }
// }
// export default App;