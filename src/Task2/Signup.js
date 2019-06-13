import React, { Component } from 'react';
import './Signup.css';
import Login from './Login';
class Signup extends Component {
    render() {
        return (
            <div>
                <Login/>
                <form class="border">
               <h1 id="center">SIGN IN</h1>
                <form className="form"></form>
                    <input type="name" name="name"  placeholder="Emailadress"id="name"></input><br/><br/>
                    <input type="email" name="email" placeholder="password"id="email"></input><br/><br/>  
                    <button id="login">Login</button>
                    <h5><u>Forget your password?</u></h5>
                    </form>
                   </div>

        );
    }
}

export default Signup;