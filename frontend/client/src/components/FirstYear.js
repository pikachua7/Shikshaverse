// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

// export default function FirstYear() {
// return (
//     <>
//     <div className='container-lg py-5 bg-white' style={{marginTop:'100px'}}>
// 	<h4>IIT Bombay : First Year Department</h4>
// 	<Tabs defaultActiveKey="second">
// 		<Tab eventKey="first" title="Floor-1">
// 		Hii, I am 1st tab content
// 		</Tab>
// 		<Tab eventKey="second" title="Floor-2">
// 		Hii, I am 2nd tab content
// 		</Tab>
// 		<Tab eventKey="third" title="Floor-2">
// 		Hii, I am 3rd tab content
// 		</Tab>
// 	</Tabs>
// 	</div>
//     </>
	
// );
// }

//import First from "./First"
import React, { useState } from 'react';
import ten from './img/ten.jpg';
import audi from './img/audi.jpg';
import eighteen from './img/eighteen.jpg';
import comp from './img/comp.jpg';
import { Pannellum } from "pannellum-react";

const FirstYear = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Auditorium',
            title: 'Auditorium',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            image : audi
        },
        {
            id: 2,
            tabTitle: 'Physics Lab',
            title: 'Physics Lab',
            content: 'Contenido de tab 2.',
            image : eighteen
        },
        {
            id: 3,
            tabTitle: 'Chemistry Lab',
            title: 'Chemistry Lab',
            content: 'Contenido de tab 3.',
            image : ten
        },
        {
            id: 4,
            tabTitle: 'Computer Lab',
            title: 'Computer Lab',
            content: 'Contenido de tab 4.',
            image : comp
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container' style={{paddingTop:"2.5%"}}>
            <iframe class="ku-embed" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7vzxT?logo=1&info=1&fs=1&vr=0&thumbs=1&inst=0" width={1300} height={800}></iframe>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p><div><Pannellum
        width="100%"
        height="500px"
        image={tab.image}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum></div></div>}
                    </div>
                )}
                
                
            </div>
        </div>
    );
}

export default FirstYear;
