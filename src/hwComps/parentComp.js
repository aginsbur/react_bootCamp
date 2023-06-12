import React, { Component } from 'react'
import ChildComp from "./childComp";

export default class ParentComp extends Component {
    state = { color:"silver"}

    changeTextColor=(_newColor)=>{
        this.setState({color:_newColor})
    }

    render() {
        return (
            <div className='text-center'>
                <h1 style={{color:this.state.color}}>this is parent comp</h1>
                <ChildComp changeTextColor={this.changeTextColor} />
            </div>
        )
    }
}