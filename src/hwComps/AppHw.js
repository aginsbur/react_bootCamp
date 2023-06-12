import React, { Component } from 'react'
import ParentComp from './parentComp'
import CoinList from './coinList'
import VodList from './vodList'
import Casino from './casino'
export default class AppHw extends Component {

    render() {
        return (
            <div className='container'>
                <h2>hw 11_06_23</h2>
                <hr/>
                <h4>Mission 1</h4>
                <ParentComp/>
                <h4>Mission 2</h4>
                <CoinList/>
                <h4>Mission 3</h4>
                <Casino/>
                <h4>Mission 4</h4>
                <VodList/>
            </div>
        )
    }
}