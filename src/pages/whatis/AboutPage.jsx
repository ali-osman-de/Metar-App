import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Whatis from "../../components/Whatis"
import Navigator from '../../components/navigator/Navigator'
import Footer from '../../components/footer/Footer'

function AboutPage() {
  return (
    <>
      <Navigator />
      <Container>
        <Row className='d-flex justify-content-center mt-5'>
          <Col>
            <Whatis />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default AboutPage