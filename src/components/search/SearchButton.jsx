import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function SearchButton({ icaoValue, receiveMetar }) {
    const [error, setError] = useState(null);

    const searchMetar = async () => {
        try {
            const apiKey = "YOUR-API-KEY";

            const response = await fetch(`https://api.checkwx.com/metar/${icaoValue}/decoded`, {
                headers: {
                    'X-API-Key': apiKey,
                },
            });

            if (!response.ok) {
                throw new Error('API isteği başarısız oldu');
            }

            const Rdata = await response.json();
            receiveMetar(Rdata);
            setError(null);
        } catch (error) {
            console.error('Hata:', error.message);
            setError(error.message);

            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    };

    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="md" onClick={searchMetar}>
                Search Metar
            </Button>
            <div>
                {error && (
                    <Alert className='text-center' variant="warning">
                        {error}
                    </Alert>
                )}
            </div>
        </div>
    );
}

export default SearchButton;
