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
            Illustrations: undraw.co, Icon: fontawesome.com <br/>
            <a href="https://www.freecounterstat.com" title="hit counter free"><img src="https://counter1.stat.ovh/private/freecounterstat.php?c=gy529y5b4xpkgzg6e5b4a12ttrlfsg14" border="0" title="hit counter free" alt="hit counter free"/></a>       
      </footer>            
    </div>
  );
}

export default App;
