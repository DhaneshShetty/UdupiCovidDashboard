import React from 'react';
import social from './social_distancing.svg';
import wash from './wash_hands.svg';
import rules from './empty_street.svg';
import RetroHitCounter from 'react-retro-hit-counter';

export function OtherInfo(){
    return (
    <div>
        <h3 style={{color:'#f64C72',margin:'20px'}}>Other Links And Resources</h3>
        <div className="row">
            <a className="col-sm-4 boxes" href="https://app.cowin.gov.in/login">
            <div>
                Book Vaccine Slot
            </div>
            </a>
            <a className="col-sm-4 boxes" href="https://www.covidwar.karnataka.gov.in/service1">
            <div>
                Covid Test Report
            </div>
            </a>
            <a className="col-sm-4 boxes" href="https://www.instagram.com/unicefindia/guide/what-to-do-if-you-have-covid-19/18153088828153160/?igshid=w261k3uni01m">
            <div>
                What to do if tested positive?
            </div>
            </a>
        </div>  
        <div className="row">
            
            <div className="col-sm-6 boxes">
                <h5>Resources</h5>
                <a href="https://covidcare-udupi.glideapp.io">WeAreUdupi COVID Resources(Udupi)</a><br/>
                <a href="https://www.dhoondh.com/">Dhoond(Plasma And Oxygen)(Pan India)</a><br/>
                <a href="https://covidplasma.online/">Plasma finder websites(Pan India)</a><br/>
                <a href="https://twitter.com/search?q=verified+Udupi+%28bed+OR+beds+OR+icu+OR+oxygen+OR+ventilator+OR+ventilators+OR+test+OR+tests+OR+testing+OR+fabiflu+OR+remdesivir+OR+favipiravir+OR+tocilizumab+OR+plasma+OR+tiffin+OR+food+OR+ambulance%29+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22need%22+-%22needs%22+-%22required%22+-%22require%22+-%22requires%22+-%22requirement%22+-%22requirements%22&f=live">
                    Twitter Posts Related to Udupi
                </a><br/>
                <a href="https://life.coronasafe.network/karnataka/udupi">Life coronasafe network resources(Udupi)</a>
            </div>
           
            
            <div className="col-sm-6 boxes">
                <h5>Helplines</h5>
                <p>Helpline No: Department of Health, Udupi – 9663957222, 9663950222<br/>
                Dr. Sudhir Chandra Suda	District Health Officer	2536650/2525566	9449843066<br/>
                Dr. Madhusudhar Naik	District surgeon	2530333/252055	9449843181<br/>
                Dr. Nagaratna	District Surveillance Officers	2525561	8277506004/9482847966<br/>
                Dr. Tejaswini	Epidemiologist	–	8951540905<br/>
                Dr. Vasudev	Udupi	0820-2526428	9449843271<br/>
                Dr. Nagabhushan Udupa	Kundapur	08254-230730/230731	8277505911/725936500/7919083875<br/>
                Dr.Krishnanand Shetty	Karkala	08258-231788	8277505892/9110859831/8050881011</p>
            </div>
            
        </div>   
        <div className="row">
            <div className="col-sm-4 boxes">
                <img src={social}  alt="Maintain Social Distancing" width="100%" style={{maxHeight:"200px"}}/><br/>
                Maintain Social Distancing and Wear Mask
            </div>
            <div className="col-sm-4 boxes">
                <img src={wash} alt="Wash Hands" width="100%" style={{maxHeight:"200px"}}/><br/>
                Wash Your Hands Regularly
            </div>
            <div className="col-sm-4 boxes">
                <img src={rules} alt="Follow Rules" width="100%" style={{maxHeight:"200px"}}/><br/>
                Follow Govt. Rules
            </div>
        </div>        
    </div>);
}

 
export const YourComponent = () => (
  <RetroHitCounter
    hits={0}
    withBorder={false}
    withGlow={false}
    minLength={4}
    size={20}
    padding={4}
    digitSpacing={3}
    segmentThickness={2}
    segmentSpacing={0.5}
    segmentActiveColor="#FFFFFF"
    segmentInactiveColor="#f64C72"
    backgroundColor="#f64C72"
    borderThickness={7}
    glowStrength={0.5}
  />
);
