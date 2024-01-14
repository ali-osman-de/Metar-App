import Accordion from 'react-bootstrap/Accordion';
import WhatisApi from '../api/WhatisApi';

function Whatis() {
    return (
        <div className='m-5'>
            {WhatisApi.data.map(title => (
                <Accordion key={title.id} defaultActiveKey={`${title.id}`} flush >
                    <Accordion.Item >
                        <Accordion.Header>{title.title}</Accordion.Header>
                        <Accordion.Body>
                            {title.desp}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))
            }
        </div >
    );
}

export default Whatis;