import React from 'react'
import './App.css';
import AppHw from './hwComps/AppHw';
//import ShopList from './comps_loop/shopList';

function App() {
    // <React.Fragment> -> משמש בתור תגית
    // עוטפת אבל שלא מרונדרת בדפדפן
    return (
        <React.Fragment>
            <h1 className='text-danger'>React</h1>
            <hr />
            {/* <ShopList/> */}
            <AppHw />
        </React.Fragment>
    );
}

export default App;

