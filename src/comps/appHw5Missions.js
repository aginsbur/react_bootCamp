import React, { Component } from 'react'
import Counter from './counter';
import Gallery from './gallery';
import FaveItemChoice from './faveItemChoice';
import Exchange from './exchange';
import ColorChoice from './colorChoice'

export default class AppHw5Missions extends Component {
    render() {
        return (

            <div className='container'>
                <Counter/>
                <hr/>
                <Gallery/>
                <hr/>
                <ColorChoice/>
                <hr/>
                <FaveItemChoice/>
                <hr/>
                <Exchange/>
            </div>
        )
    }
}