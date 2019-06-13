import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div>
                <form class="box">
               <h1>Sign Up</h1>
                <form className="form">
                    <label id="lab1">Name</label><br/>
                    <input type="name" name="name" id="name"></input><br/><br/>
                    <label>Email</label><br/>
                    <input type="email" name="email" id="email"></input><br/><br/>
                    <label>Password</label><br/>
                    <input type="pass" name="pass" id="pass"></input><br/><br/>
                    <label>Conformation</label><br/>
                    <input type="email" name="email" id="confr"></input><br/><br/>
                    <button id="btn">Create my Account</button>
                    </form>
                </form>
            </div>
        );
    }
}

export default Login;