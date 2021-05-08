import React,{useState,useEffect} from 'react';

export function Slots(){
    var today = new Date();
    const [slots,setSlots] = useState([]);
    const [date,setDate] = useState(today);
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
    return (
    <div>
        <h3 style={{color:'#f64C72',margin:'20px'}}>Vaccine Slots Availablility</h3>
        <input type="date" onChange={handleChange} style={{margin:"20px",color:"#f64C72",backgroundColor:"#242582"}} value={date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')}/><br/>
        <div>
            {slots.length===0 ? <div className="boxes"> No Slots Available for this Date </div>:
            slots.map(center => (
            <div className="row boxes">
                <div className="col-6"> 
                    <p>{center.name}<br/>
                    {center.address}</p>
                </div>
                <div className="col-6">
                <p>Slots:{center.available_capacity}    Vaccine:{center.vaccine}<br/>Fee:{center.fee_type}      Age:{center.min_age_limit}+<br/>
                Timings:{center.from}-{center.to}</p>
                </div>
            </div>

        ))}
        </div>
    </div>);
}

//<div class="mapouter">
//           <div class="gmap_canvas">
//              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Udupi%20District,Karnataka&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//              <a href="https://123movies-to.org"></a><br/>
//             <a href="https://www.embedgooglemap.net">embed google maps in website</a>
//          </div>
//      </div>
