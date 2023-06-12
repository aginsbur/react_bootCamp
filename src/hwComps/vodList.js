import React, { Component } from 'react'
import VideoComp from './videoComp';

export default class VodList extends Component {

    state = { ar: []};

    componentDidMount() {
        this.doApi();
    }

    doApi = async () => {
        let url = "https://api.themoviedb.org/3/list/3?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US";
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data.items);
        this.setState({ ar: data.items });
    }


    render() {
        return (
            <div className='container'>
                <h2 className='title2'>welcome to service app of movies!</h2>
                <div className='row'>
                    {this.state.ar.map(item => {
                        return (
                            <VideoComp key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}