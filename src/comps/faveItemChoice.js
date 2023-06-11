import React,{Component} from "react";

export default class FaveItemChoice extends Component{
    choiceRef = React.createRef();
    state = {choice:0};
    pics_ar = ["cake3.jpg","orange5.jpg","pic2.jpg","pic3.jpg"];

    onChoiceChange = () => {
      let selectedVal = this.choiceRef.current.value;
      this.setState({choice: selectedVal});
    }
  
    render() {
      return(
        <div className="p-2" style={{border:"2px solid black"}}>
        <h2 id="id_h2">Select a favorite item:</h2>
        <select ref={this.choiceRef} onChange={this.onChoiceChange} className="form-select">
          <option value="0">cake</option>
          <option value="1">pie</option>
          <option value="2">tea</option>
          <option value="3">coffe</option>
        </select>
        <br/>
        <img src={"/images/"+this.pics_ar[this.state.choice]} alt="item"  className='col-md-4' />
      </div>)
    }

}