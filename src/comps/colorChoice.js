import React,{Component} from "react";

export default class ColorChoice extends Component{
    colorChoiceRef = React.createRef();

    onColorChange = () => {
        let h2_span = document.querySelector("#id_h2_span");
        h2_span.innerHTML=`${this.colorChoiceRef.current.value}`;
        let h2 = document.querySelector("#id_h2");
        h2.style.color=`${this.colorChoiceRef.current.value}`
      }

  render(){
    return(
      <div className="p-2" style={{border:"2px solid black"}}>
        <h2 id="id_h2">Select a color: <span id="id_h2_span"></span></h2>
        <select ref={this.colorChoiceRef} onChange={this.onColorChange} className="form-select">
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="orange">orange</option>
          <option value="red">red</option>
        </select>
         </div>
    )
  }
}