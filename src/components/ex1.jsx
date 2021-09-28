
import React, { Component } from 'react';
import UserTable from './display/ex1Display';

const userData = [{
    name:"mj1",
    age:24,
    gender:"male",

},{
    name:"mj2",
    age:25,
    gender:"female",
    
},{
    name:"mj3",
    age:26,
    gender:"male",
    
}]

class Ex1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           data:[ ...userData ]}
    }
    render() {
        console.log(this.state.data) 
        return ( <>
        <UserTable userData={this.state.data}/>
        </> );
    }
}
 
export default Ex1;