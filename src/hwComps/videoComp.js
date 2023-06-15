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

// import React, { useState } from 'react'

// export default function TvItem(props) {
//     const [showInfo, setShowInfo] = useState(false);
//     let item = props.item;
//     return (
//         <div className='col-md-4'>
//             <div className='shadow p-2 overflow-hidden h-100'>
//                 <img src={`/images/images/${item.image}`} className='w-50 float-start me-2 border' alt={item.name} />
//                 <h4>{item.name}</h4>
//                 <div>Genere: {item.genere}</div>
//                 <div>Views: {item.views.toLocaleString()}</div>
//                 <button onClick={() => {
//                     setShowInfo(!showInfo)
//                 }}>Show/hide info</button>
//                 {showInfo && <p>{item.descrption}</p>}
//             </div>
//         </div>
//     )
// }
