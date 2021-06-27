import React,{useState,useEffect} from 'react';

export function Slots(){
    var today = new Date();
    const [slots,setSlots] = useState([]);
    const [date,setDate] = useState(today);
    const [age18,setAge18] = useState(false);
    const [free,setFree] = useState(false);
    const [paid,setPaid] = useState(false);
    const [covaxin,setCovaxin] = useState(false);
    const [covishield,setCovishield] = useState(false);
    const [dose1,setDose1] = useState(false);
    const [dose2,setDose2] = useState(false);
    useEffect(()=>{    
        var dateFetch = new Date(date);
        var dd = String(dateFetch.getDate()).padStart(2, '0');
        var mm = String(dateFetch.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = dateFetch.getFullYear();
        dateFetch = dd + '-' + mm + '-' + yyyy;
        if(!(isNaN(dd) || isNaN(mm) || isNaN(yyyy))){    
            fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=286&date='+dateFetch)
            .then(res=>res.json())
            .then(res=>{
                setSlots(res.sessions);
            },(error)=>{
                console.log("Error in slot fetch:"+error);
            })
        }
    },[date]);
    const handleChange=(e)=>{
        let newDate=new Date(e.target.value);
        console.log(newDate.getDate);
        setDate(newDate);
    }

    const toggleBackground=(e,state)=>{
        if(state){
            e.target.style.backgroundColor="#242582";
        }
        else{
            e.target.style.backgroundColor="#f64C72";
        } 
    }

    const filter18=(e)=>{
        toggleBackground(e,age18);              
        setAge18(!age18);
    }

    const filterFree=(e)=>{
        toggleBackground(e,free);      
        setFree(!free);
    }

    const filterPaid=(e)=>{
        toggleBackground(e,paid)     
        setPaid(!paid);
    }

    const filterDose1=(e)=>{
        toggleBackground(e,dose1);     
        setDose1(!dose1);
    }

    const filterDose2=(e)=>{
        toggleBackground(e,dose2);      
        setDose2(!dose2);
    }

    const filterCovaxin=(e)=>{
        toggleBackground(e,covaxin);      
        setCovaxin(!covaxin);
    }

    const filterCovisheild=(e)=>{
        toggleBackground(e,covishield);     
        setCovishield(!covishield);
    }
    return (
    <div>
        <h3 style={{color:'#f64C72',margin:'20px'}}>Vaccine Slots Availablility</h3>
        <input type="date" onChange={handleChange} style={{margin:"20px",color:"#f64C72",backgroundColor:"#242582"}} value={date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')}/>
        <div className="d-flex flex-wrap justify-content-start">
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filter18}>18+</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterFree}>Free</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterPaid}>Paid</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterCovaxin}>Covaxin</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterCovisheild}>Covishield</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterDose1}>Dose 1</div>
            <div style={{backgroundColor:"#242582",color:"#FFFFFF",borderRadius:"5px",margin:"8px",padding:"6px"}} onClick={filterDose2}>Dose 2</div><br/>
        </div>
        <div>
            {slots.length===0 ? <div className="boxes"> No Slots Available for this Date </div>:
            slots.filter(it=>{if(age18)
                {return it.min_age_limit===18}
                else{return true}
            }).filter(it=>{if(free)
                {return it.fee_type==="Free"}
                else{return true}
            }).filter(it=>{if(paid)
                {return it.fee_type==="Paid"}
                else{return true}
            }).filter(it=>{if(covaxin)
                {return it.vaccine==="COVAXIN"}
                else{return true}
            }).filter(it=>{if(covishield)
                {return it.vaccine==="COVISHIELD"}
                else{return true}
            }).filter(it=>{if(dose1)
                {return it.available_capacity_dose1>0}
                else{return true}
            }).filter(it=>{if(dose2)
                {return it.available_capacity_dose2>0}
                else{return true}
            }).map(center => (
            <div className="row boxes">
                <div className="col-6"> 
                    <p>{center.name}<br/>
                    {center.address}</p>
                </div>
                <div className="col-6">
                <p>Dose 1:{center.available_capacity_dose1}  Dose 2:{center.available_capacity_dose2} <br/> Vaccine:{center.vaccine}<br/>Fee:{center.fee}      Age:{center.min_age_limit}+<br/>
                Timings:{center.from}-{center.to}</p>
                </div>
            </div>

        ))}
        </div>
    </div>);
}

