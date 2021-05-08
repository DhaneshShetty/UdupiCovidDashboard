import React,{useState,useEffect} from 'react';

export function Cases(){
    const [totalCases,setTotalCases]=useState({cases:0,delta:0});
    const [activeCases,setActiveCases]=useState({cases:0,delta:0});
    const [recoveredCases,setRecoveredCases]=useState({cases:0,delta:0});
    const [deceasedCases,setDeceasedCases]=useState({cases:0,delta:0});
    useEffect(()=>{
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(res=>res.json())
        .then((response)=>{
        let res=response.Karnataka.districtData.Udupi;
        setTotalCases({cases:res.confirmed,delta:res.delta.confirmed});
        setActiveCases({cases:res.active,delta:(res.delta.confirmed-res.delta.deceased-res.delta.recovered)});
        setDeceasedCases({cases:res.deceased,delta:res.delta.deceased});
        setRecoveredCases({cases:res.recovered,delta:res.delta.recovered});
        }
        ,(error)=>{
        console.log('Cases API fetch error:'+error);}
    )},[]);
    return(
        <div>
            <h3 style={{color:'#f64C72',margin:'20px'}}>COVID Stats</h3>
            <div className="row">
                <div className="col-sm-3 boxes total"><h5>Total</h5><h6>{totalCases.cases}</h6>+{totalCases.delta}</div>
                <div className="col-sm-3 boxes active"><h5>Active</h5><h6>{activeCases.cases}</h6>{activeCases.delta}</div>
                <div className="col-sm-3 boxes recover"><h5>Recovered</h5><h6>{recoveredCases.cases}</h6>+{recoveredCases.delta}</div>
                <div className="col-sm-3 boxes dead"><h5>Deceased</h5><h6>{deceasedCases.cases}</h6>+{deceasedCases.delta}</div>
            </div>
      </div>

    );
}
