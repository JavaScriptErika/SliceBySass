import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from './Banner';

const text = {
    title: "California's 12 National Parks"
}

const Hero = () => {
    return (
        <>
            <section className="py-5 hero-wrapper d-flex align-items-center">
                <Container>
                    <Row>
                        <Col md={6} lg={5} className='mt-5'>
                            <h1>{text.title}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Banner />
        </>
    )
}

export default Hero;