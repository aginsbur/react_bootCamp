import React from 'react'
import './App.css'
import AppHw from './comps/appHw';
import AppHw5Missions from './comps/appHw5Missions';
import AppDate from './comps_date/appDate';


function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      <hr/>
      {/* <AppHw/> */}
      {/* <AppDate/> */}
      {<AppHw5Missions/>}
    </React.Fragment>
  );
}

export default App;