import React, { Component } from 'react';
class Name extends Component {
    render() {
        return (
            <div>
               name:{this.props.children}|age:{this.props.age} 
             </div>
        );
    }
}

export default Name;