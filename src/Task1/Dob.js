import React, { Component } from 'react';

class Dob extends Component {
    render() {
        return (
            <div>
               name:{this.props.children}|Dob:{this.props.Dobs}    
            </div>
        );
    }
}

export default Dob;