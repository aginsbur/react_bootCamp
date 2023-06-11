import React,{Component} from "react";

export default class InputDate extends Component{
  
  render(){
    return(
      <div className="p-2" style={{background:this.props.bg, border:"2px solid blue"}}>
        <h2>inputDate</h2>
      </div>
    )
  }
}