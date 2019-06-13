import React, { Component } from 'react';
import './Input.css'
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
        value: 'Sowmya'
        }
      }
      handleChange (e) {
        console.log('handle change called')
      }
    
      handleClick () {
        this.setState({value: 'Sahana'})
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
      }
      render () {
        return (
          <div>
            <input id="font" readOnly value={this.state.value} onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/><br/>
            <button  id="click" onClick={this.handleClick.bind(this)}>Change Input</button>
            <input  id="input"type="text" onChange={e => this.setState({ text: e.target.value })}/>

          </div>



        );
    }
}
export default Input;