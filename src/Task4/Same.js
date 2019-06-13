import React, { Component } from 'react';

class Same extends Component {
        constructor(props) {
          super(props);
          this.state = {
            input:''
          };
          // change code below this line
      this.handleChange = this.handleChange.bind(this)
          // change code above this line
        }
        // change code below this line
      
      handleChange(e) {
         this.setState({e.target.value}) 
      }
        // change code above this line
        render() {
          return (
            <div>
              { /* change code below this line */}
              <input input={this.state.input} onChange={handleChange}/>
              { /* change code above this line */}
              <p>{this.state.input}</p>
            </div>
          );
        }
      };
      
export default Same;