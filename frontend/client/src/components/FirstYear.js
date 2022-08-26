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

import React, { useState } from 'react';

const FirstYear = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FirstYear;
