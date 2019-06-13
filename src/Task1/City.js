import React, { Component } from 'react'

class City extends Component {
    render() {
        return (
            <div>
               name:{this.props.children}|city:{this.props.Citys} 
                
            </div>
        );
    }
}

export default City;