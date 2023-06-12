import React, { Component } from 'react'

export default class VideoComp extends Component {
    state = { info: "" ,infoDisplayed:false};

    displayInfo = (_newInfo) => {

        if (!this.state.infoDisplayed) {
            this.setState({ info: _newInfo });
            this.setState({infoDisplayed:true});
        }
        else {
            this.setState({ info: "" })
            this.setState({infoDisplayed:false});
        }

    }

    render() {
        let item = this.props.item
        return (
            <div className='col-md-4 border p-2' onClick={()=>this.displayInfo(item.overview)}>
                <img className='float-left' src={item.poster_path} />
                <h4>{item.title}</h4>
                <div>Realease Date: {item.release_date.toLocaleString()}</div>
                <div>Rating: {Number(item.popularity).toFixed(2)}</div>
                <div>{this.state.info}</div>
            </div>
        )
    }
}