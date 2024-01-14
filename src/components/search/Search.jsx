import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({ onIcaoChange, icaoValue }) {

    const handleIcao = (event) => {
        const newValue = event.target.value;
        onIcaoChange(newValue);
    };

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Airport Name
                </InputGroup.Text>
                <InputGroup.Text id="inputGroup-sizing-default">
                    ICAO
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="icao"
                    type="text"
                    value={icaoValue}
                    onChange={handleIcao}
                />
            </InputGroup>
        </>
    );
}

export default Search;