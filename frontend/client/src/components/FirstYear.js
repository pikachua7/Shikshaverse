import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function FirstYear() {
return (
    <>
    <div className='container-lg py-5 bg-white' style={{marginTop:'100px'}}>
	<h4>IIT Bombay : First Year Department</h4>
	<Tabs defaultActiveKey="second">
		<Tab eventKey="first" title="Floor-1">
		Hii, I am 1st tab content
		</Tab>
		<Tab eventKey="second" title="Floor-2">
		Hii, I am 2nd tab content
		</Tab>
		<Tab eventKey="third" title="Floor-2">
		Hii, I am 3rd tab content
		</Tab>
	</Tabs>
	</div>
    </>
	
);
}
