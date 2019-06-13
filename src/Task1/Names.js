import React, { Component } from 'react';
import Name from "./Name";

class Names extends Component {
    render() {
        return (
            <div>
                <h1>Name:Age</h1>
             <h1>{this.props.title}</h1>
             <Name Names ={20}>shahana</Name>
             < Name  Names={30}>anjana</Name>
             <Name  Names ={20}>Amurutha</Name> 
             </div>
        );
    }
}


export default Names;