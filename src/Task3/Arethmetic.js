import React, { Component } from 'react';
import './Arethmetic.css';
class Arethmetic extends Component {
        constructor(props){
            super(props);
            this.state={ 
              add: 10,
              sub:10,
              mul:10
            }
        }

     addfun=()=>{
       this.setState({add:this.state.add=this.state.add+5});
     }
     subfun=()=>{
       if(this.state.sub>0)
      this.setState({sub:this.state.sub=this.state.sub-5});
    }
    mulfun=()=>{
      this.setState({mul:this.state.mul=this.state.mul*5});
    }
        render() {
         return (
           <div>
            <b class="font">{this.state.add}</b>
            <b class="font1">{this.state.sub}</b>
            <b class="font2">{this.state.mul}</b>
             <br/>
             <input type='button' onClick={this.addfun} value='Addition'/>
             <input type='button' onClick={this.subfun} value='subtraction'/>
             <input type='button' onClick={this.mulfun} value='multification'/>
            </div>
        );
         }
        }
        
         
  
    
export default Arethmetic;