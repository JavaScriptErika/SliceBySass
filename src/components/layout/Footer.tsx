import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="text-primary">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <p>Starry Nights and Desert Delights: Exploring California's National Parks</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='text-center text-md-left'>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms and Condtions</a></li>
                            <li className='d-none d-md-block'>&copy; {getCurrentYear()}, All rights reserved.</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={6} className='text-center text-md-left'>
                        <p>Connect with Us</p>
                        <ul>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'></a></li>
                            <li className='d-md-none'>&copy; {getCurrentYear()}, All rights reserved.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;