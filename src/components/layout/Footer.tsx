import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';
import Logo from '../../assets/logo.png'


const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="text-primary py-5">
            <Container>
                <Row className='mb-5'>
                    <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}} className='text-center'>
                        <Image src={Logo} alt="California's 12 National Parks"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={9} xl={10} className='text-center text-md-start'>
                        <ul className='ul-special'>
                            <li><a href='https://www.ziftrshop.com/policy/privacy' target="_blank" rel='noopener noreferrer'>Privacy Policy</a></li>
                            <li><a href='https://www.ziftrshop.com/policy/terms-of-service' target="_blank" rel='noopener noreferrer'>Terms and Conditions</a></li>
                        </ul>
                    </Col>
                    <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 2 }} lg={{ span: 3, offset: 0 }} xl={2}>
                        <ul className='ul-special d-flex justify-content-between align-items-center'>
                            <li>
                                <a href="https://www.facebook.com/AirTankNH/" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'>
                                <Facebook className='icon' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/airtanknh/?hl=en" aria-label="Instagram page" target="_blank" rel='noopener noreferrer'>
                                    <Instagram className='icon' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/airtank/" aria-label="LinkedIn Page" target="_blank" rel='noopener noreferrer'>
                                    <Linkedin className='icon' />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/AirTankNH" aria-label="Twitter Page" target="_blank" rel='noopener noreferrer'>
                                    <div className='icon-unicode'>&#120143;</div>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-md-start'>
                        <small>&copy; {getCurrentYear()}, All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;