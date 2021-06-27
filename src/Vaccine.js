import React,{useState,useEffect} from 'react';

export function Vaccine(){
    const [totalVaccines,setTotalVaccines] = useState({total:0,today:0});
    const [doseOneVaccines,setDoseOneVaccines] = useState({total:0,today:0});
    const [doseTwoVaccines,setDoseTwoVaccines] = useState({total:0,today:0});
    useEffect(()=>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        fetch('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=16&district_id=286&date='+today)
        .then(response=>response.json())
        .then((res)=>{
            setTotalVaccines({total:res.topBlock.vaccination.total_doses,today:res.topBlock.vaccination.today});
            setDoseOneVaccines({total:res.topBlock.vaccination.tot_dose_1,today:res.topBlock.vaccination.today_dose_one});
            setDoseTwoVaccines({total:res.topBlock.vaccination.tot_dose_2,today:res.topBlock.vaccination.today_dose_two});

        },(error)=>{
            console.log('Vaccine API fetch error:'+error);
        }
    )},[]);
    return(
        <div>
            <h3 style={{color:'#f64C72',margin:'20px'}}>Vaccination Numbers</h3>
            <div className="row">
                <div className="col-sm-4 boxes"><h5>Total Doses</h5><h6>{totalVaccines.total}</h6>+{totalVaccines.today}</div>
                <div className="col-sm-4 boxes"><h5>Dose 1</h5><h6>{doseOneVaccines.total}</h6>+{doseOneVaccines.today}</div>
                <div className="col-sm-4 boxes"><h5>Dose 2</h5><h6>{doseTwoVaccines.total}</h6>+{doseTwoVaccines.today}</div>
            </div>
            <span style={{height:"100%",color:"#f64C72",margin:"20px"}}>Fully Vaccinated</span><br/>
            <div class="progress" style={{backgroundColor:"#242582",margin:"20px",height:"50px",textAlign:"center"}} >
                <div class="progress-bar progress-bar-striped active" role="progressbar" style={{backgroundColor:"#f64C72",color:"#FFFFFF",width:((doseTwoVaccines.total/1266957)*100).toFixed(2)+"%"}} aria-valuenow={((doseTwoVaccines.total/1266957)*100).toFixed(2)}>{((doseTwoVaccines.total/1266957)*100).toFixed(2)}%</div>
            </div>
            <span style={{height:"100%",color:"#f64C72",margin:"20px"}}>Partially Vaccinated</span><br/>
            <div class="progress" style={{backgroundColor:"#242582",margin:"20px",height:"50px"}}>
                <div class="progress-bar progress-bar-striped active" role="progressbar" style={{color:"#FFFFFF",width:((doseOneVaccines.total/1266957)*100).toFixed(2)+"%"}} aria-valuenow={((doseOneVaccines.total/1266957)*100).toFixed(2)} aria-valuemin="0" aria-valuemax="100">{((doseOneVaccines.total/1266957)*100).toFixed(2)}%</div>
            </div>
      </div>
    );

}