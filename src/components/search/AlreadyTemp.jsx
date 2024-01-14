import Accordion from 'react-bootstrap/Accordion';
import alreadyTempData from '../../api/AlreadyTempData';

function AlreadyTemp() {
    return (
        <div className='m-5'>
            {alreadyTempData.data.map(title => (
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

export default AlreadyTemp;