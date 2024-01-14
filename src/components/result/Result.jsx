import React, { useState, useEffect } from 'react';
import { Card, Nav, ListGroup } from 'react-bootstrap';

function Result({ metarData }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(metarData?.data[0] ? true : false);
    }, [metarData]);

    const stationData = metarData?.data[0] || {};
    const { icao = '', station = {}, raw_text = '', observed = '', barometer = {}, dewpoint = {}, wind = {}, visibility = {}, temperature = {}, clouds = [] } = stationData;

    const cloudsReport = (clouds) => {
        let allReport = "";
        for (let index = 0; index < clouds.length; index++) {
            const cloud = clouds[index];

            if (cloud.code === "FEW") {
                allReport += (cloud.feet) + " fit yükseklikte bulut var, ";
            } else if (cloud.code === "BKN") {
                allReport += (cloud.feet) + " fit yükseklikte parçalı bulutlar var, ";
            } else if (cloud.code === "OVC") {
                allReport += "gökyüzünün tamamen kapatan bulut tabakası " + (cloud.feet) + " fit yükseklikte, ";
            }
        }
        return allReport;
    };

    const [activeTab, setActiveTab] = useState("#first");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='m-5'>
            {visible ? (
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first" active={activeTab === "#first"} onClick={() => handleTabClick("#first")}>
                                    {icao}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#second" active={activeTab === "#second"} onClick={() => handleTabClick("#second")}>
                                    Meteorological Terminal Air Report (METAR)
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#third" active={activeTab === "#third"} onClick={() => handleTabClick("#third")}>
                                    More
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        {activeTab === "#first" && (
                            <>
                                <Card.Title>{station.name}</Card.Title>
                                <Card.Text>
                                    {station.location}
                                </Card.Text>
                            </>
                        )}
                        {activeTab === "#second" && (
                            <>
                                <Card.Title>{observed}</Card.Title>
                                <Card.Text>
                                    {raw_text}
                                </Card.Text>
                            </>
                        )}
                        {activeTab === "#third" && (
                            <>
                                <Card.Title className='text-center'>Metar Açılımı</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item variant='dark'>
                                        Rüzgârın gerçek yönü = {wind.degrees} dereceden, hız: {wind.speed_kts} knot
                                    </ListGroup.Item>
                                    <ListGroup.Item variant='dark'>
                                        Görüş: {visibility.meters_float} m
                                    </ListGroup.Item>
                                    <ListGroup.Item variant='dark'>
                                        Bulutlar: {cloudsReport(clouds)}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant='dark'>
                                        Sıcaklık: {temperature.celsius} santigrat derece
                                    </ListGroup.Item>
                                    <ListGroup.Item variant='dark'>
                                        Çiy noktası (İşba): {dewpoint.celsius} santigrat derece
                                    </ListGroup.Item>
                                    <ListGroup.Item variant='dark'>
                                        QNH (Deniz seviyesi basıncı): {barometer.hpa} hPa
                                    </ListGroup.Item>
                                </ListGroup>
                            </>
                        )}
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    );
}

export default Result;
