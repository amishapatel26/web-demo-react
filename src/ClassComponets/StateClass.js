import React from 'react';

class StateClass extends React.Component{
       
    constructor(){
        super();
        this.state={data:"welcome react-js"}
 
    }
    update(){
        this.setState({data:"welcome to class with state"})
    }


    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.update()}>click !</button>
            </>
        )
    }
}
export default StateClass;