import React, { Component } from 'react'
import ShopItem from './shopItem';
import "./shopList.css";
import TestComp from './testComp';

export default class ShopList extends Component {

  state = {ar:[]};

  componentDidMount(){
    this.doApi();
  }

  doApi = async() => {
    let url = "http://fs1.co.il/bus/shop.php";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    this.setState({ar:data});
  }

  render() {
    return (
      <div className='container'>
        <h2 className='title2'>Shop list:</h2>
        <h2>Test</h2>
        <TestComp />
        <div className='row'>
          {this.state.ar.map(item => {
            // key - עוזר במערכים דימנים שתאים מהם נמחקים ומתווספים
            // תוך כדי האפליקציה לעבוד יותר מהר
            return(
              <ShopItem key={item.id} item={item} />

              )
              // let shop = new ShopItem("",item)
          })}
        </div>
      </div>
    )
  }
}