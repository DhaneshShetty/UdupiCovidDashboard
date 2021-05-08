import './App.css';
import {Cases} from './Cases';
import {Vaccine} from './Vaccine';
import {Slots} from './Slots';
import {OtherInfo} from './OtherInfo';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        Udupi COVID Dashboard
      </header>
      <Cases/>  
      <Vaccine/>
      <Slots/>
      <OtherInfo/> 
      <footer style={{textAlign:"center",color:"white",backgroundColor:"#f64C72",padding:'10px',marginTop:'10px'}} className="container-fluid">
            A voluntary initiative for the people of Udupi<br/>
            Illustrations: undraw.co, Icon: fontawesome.com
      </footer>
    </div>
  );
}

export default App;
//https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=16&district_id=286&date=2021-05-07