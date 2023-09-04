import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Facebook, Twitter, Linkedin, Instagram } from "react-bootstrap-icons";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="text-primary">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Image src='' alt=''/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={10} className='text-center text-md-left'>
                        <ul>
                            <li><a href='https://www.ziftrshop.com/policy/privacy'>Privacy Policy</a></li>
                            <li><a href='https://www.ziftrshop.com/policy/terms-of-service'>Terms and Condtions</a></li>
                            {/* <li className='d-none d-md-block'>&copy; {getCurrentYear()}, All rights reserved.</li> */}
                        </ul>
                    </Col>
                    <Col xs={12} lg={2} className='text-center text-md-left'>
                        <ul className='social-list d-flex justify-content-between'>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'><Facebook className='icon' /></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'><Twitter className='icon' /></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'><Instagram className='icon' /></a></li>
                            <li><a href="" aria-label="Facebook Page" target="_blank" rel='noopener noreferrer'><Linkedin className='icon' /></a></li>
                            {/* <li className='d-md-none'>&copy; {getCurrentYear()}, All rights reserved.</li> */}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; {getCurrentYear()}, All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;