import React, { useState } from 'react'
import Navigator from '../../components/navigator/Navigator'
import Search from '../../components/search/Search'
import { Container, Row, Col } from 'react-bootstrap'
import SearchButton from '../../components/search/SearchButton'
import AlreadyTemp from '../../components/search/AlreadyTemp'
import Result from '../../components/result/Result'
import Footer from '../../components/footer/Footer'

function Home() {

  const [icaoValue, setIcaoValue] = useState('');
  const [metarData, setMetarData] = useState();

  const handleIcaoChange = (newValue) => {
    setIcaoValue(newValue);
  };

  const handleMetarData = (data) => {
    setMetarData(data);
  };

  return (
    <>
      <Navigator />
      <Container>
        <Row className='d-flex justify-content-center mt-5'>
          <Col xs={4}>
            <Search onIcaoChange={handleIcaoChange} icaoValue={icaoValue} />
          </Col>
          <Col xs={4}>
            <SearchButton icaoValue={icaoValue} receiveMetar={handleMetarData} />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={6}>
            <AlreadyTemp />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={8}>
            <Result metarData={metarData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Home