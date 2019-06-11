import React, { Component } from 'react';
import Age from "./Name";
class Name extends Component {
    render() {
        return (
            <div>
             <h1>{this.props.title}</h1>
             <Name Names ={20}>shahana</Name>
             < Name  Names={30}>anjana</Name>
             <Name  Names ={20}>Amurutha</Name>  
            </div>
        );
    }
}

export default Name;