import React, { Component } from 'react'
import CoinComp from './coinComp';

export default class CoinList extends Component {

  state = {ar:[]};

  componentDidMount(){
    this.doApi();
  }

  doApi = async() => {
    let url = "http://fs1.co.il/bus/bitcoin.php";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    this.setState({ar:data});
  }

  render() {
    return (
      <div className='container'>
        <h2 className='title2'>welcome to service app of coins!</h2>
        <div className='row'>
          {this.state.ar.map(item => {
              return(
              <CoinComp key={item.id} item={item} />
              )
                })}
        </div>
      </div>
    )
  }
}