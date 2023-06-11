import React, { Component } from 'react'
import Counter from './counter';
import Gallery from './gallery';
import Message from './message';
import Exchange from './exchange';

export default class AppHw extends Component {
    render() {
        return (

            <div className='container'>
                <Message msg="First1" bg="red" />
                <hr/>
                <Message msg="Second2" bg="blue" />
                <hr/>
                <Exchange/>
                <hr/>
                <Counter/>
                <hr/>
                <Gallery/>
            </div>
        )
    }
}