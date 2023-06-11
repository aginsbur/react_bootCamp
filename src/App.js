import React from 'react'
import './App.css'
import AppHw from './comps/appHw';
import AppDate from './comps_date/appDate';


function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      <hr/>
      {/* <AppHw/> */}
      <AppDate/>
    </React.Fragment>
  );
}

export default App;