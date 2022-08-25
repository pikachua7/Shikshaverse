import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';

export default function Profile() {

 


  
return (
	

      <div className='container-xxl py-5 ' style={{marginTop:'100px'}}>
       
       
        <div className="container-xxl py-5 ">
        <h4 style={{color:'blue'}}>Indian Institute of Technology Bombay</h4>
        <p>
            Departments
        </p>
 
        <img src="img/depts.png"  useMap="#iitb" style={{}}>
        </img>

        <map name="iitb">
        
        <area shape = "circle" coords ="109,121,75" href = "FirstYear.html" alt = "First Year Building"/>
        <area shape = "circle" coords ="303,130,75" href = "" alt = "Computer Science and Engineering Building"/>
        <area shape = "circle" coords ="491,140,75" href = "" alt = "Mechanical Engineering Building"/>
        <area shape = "circle" coords ="105,298,75" href = "" alt = "Physical Education Building"/>
        <area shape = "circle" coords ="312,302,75" href = "" alt = "Bio-medical Engineering Building"/>
        <area shape = "circle" coords ="490,296,75" href = "" alt = "Civil Engineering Building"/>
        <area shape = "circle" coords ="120,457,75" href = "" alt = "Electronics Engineering Building"/>
        <area shape = "circle" coords ="303,459,75" href = "" alt = "Hostel Building"/>
        <area shape = "circle" coords ="492,468,75" href = "" alt = "Industrial Engineering Building"/>



        </map>
        </div>
      </div>
        
	
);
}
