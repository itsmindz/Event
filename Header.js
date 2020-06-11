import React, {Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={name:"Mind"}
        };
    
    render(){
      return(
        <div>
            <h1>React Simulation</h1>
            <h2>{this.state.name}</h2>

            
        </div>
      );
    }
}
  export default Header;