import React, { Component } from 'react';
import  City from './City';
import  Dobs from './Dobs';
import  Names from './Names';
class Citys extends Component {
    render() {
        return (
            <div>
                <h1>Name:City</h1>
             <h1>{this.props.title}</h1>
             <City Citys ='mandya'>sanjana</City>
             <City  Citys='mysore'>anand</City>
             <City  Citys ='bangalore'>Amitha</City> 
             <Dobs/>
             <Names/>
             </div>
        );
    }
}

export default Citys;