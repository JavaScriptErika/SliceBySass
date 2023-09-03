import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from './Banner';

const Hero = () => {
    return (
        <>
            <section className="py-5 hero-wrapper">
                <Container>
                    <Row>
                        <Col lg={5} className='mt-5'>
                            <h1>12 Amazing California National Parks</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Banner />
        </>
    )
}

export default Hero;