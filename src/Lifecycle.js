
import React , { Component}  from 'react';
class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'sanjana'
        }
        console.log('lifecycle1 constructor')
    }
    componentDidMount(){
console.log('lifecycle1 componentDidmount')
}

componentWillMount(){
console.log('lifecycle1 componentWillmount')
} 


render(){
    console.log('lifecycle1 render')
    return ( <div>
        <div>Lifecycle1</div>
        </div>
    );
}
}
    
    
export default Lifecycle;


