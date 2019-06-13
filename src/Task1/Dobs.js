import React, { Component } from 'react';
import Dob from './Dob';
class Dobs extends Component {
    render() {
        return (
            <div>
               <h1>Name:Dob</h1>
             <h1>{this.props.title}</h1>
             <Dob Dobs='12/06/1994'>Aditya</Dob>
             <Dob Dobs='17/07/1995'>anand</Dob>
             <Dob Dobs ='24/09/1998'>Allu</Dob>  
            </div>
        );
    }
}

export default Dobs;