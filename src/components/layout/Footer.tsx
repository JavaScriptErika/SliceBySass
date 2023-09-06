import React, { ElementType } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Lottie from 'lottie-react';
import wavesAnimation from '../../assets/lottie/waves.json'
import { Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';
import Logo from '../../assets/logo-light.png'

const text = {
    logoAlt: "California's 12 National Parks",
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    rights: 'All rights reserved.'
}

interface SocialMediaIconType {
    href: string,
    ariaLabel: string,
    IconComponent: ElementType
}

const SocialMediaIcon = ({ href, ariaLabel, IconComponent }: SocialMediaIconType) => (
    <li>
        <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
            <IconComponent className='icon' />
        </a>
    </li>
);
    const socialMediaData = [
        {
            href: "https://www.facebook.com/AirTankNH/",
            ariaLabel: "Facebook Page",
            IconComponent: Facebook,
        },
        {
            href: "https://www.instagram.com/airtanknh/?hl=en",
            ariaLabel: "Instagram page",
            IconComponent: Instagram,
        },
        {
            href: "https://www.linkedin.com/company/airtank/",
            ariaLabel: "LinkedIn Page",
            IconComponent: Linkedin,
        },
    ];

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
    return (
        <>        
            <footer className='py-5'>
                <Lottie animationData={wavesAnimation} className='footer-waves' />
                <Container>
                    <Row className='mb-5'>
                        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}} className='text-center'>
                            <Image src={Logo} alt={text.logoAlt}/>
                        </Col>
                    </Row>
                    <Row>
                        {/* Privacy and terms */}
                        <Col xs={12} md={6} lg={9} xl={10} className='text-center text-md-start'>
                            <ul className='ul-special fw-semi-bold'>
                                <li><a href='https://www.ziftrshop.com/policy/privacy' target="_blank" rel='noopener noreferrer'>{text.privacy}</a></li>
                                <li><a href='https://www.ziftrshop.com/policy/terms-of-service' target="_blank" rel='noopener noreferrer'>{text.terms}</a></li>
                            </ul>
                        </Col>
                        {/* Social Media */}
                        <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 2 }} lg={{ span: 3, offset: 0 }} xl={2}>
                            <ul className='ul-special d-flex justify-content-between align-items-center'>
                            {socialMediaData.map((item, index) => (
                                <SocialMediaIcon
                                    key={index}
                                    href={item.href}
                                    ariaLabel={item.ariaLabel}
                                    IconComponent={item.IconComponent}
                                />
                            ))}
                                <li>
                                    <a href="https://twitter.com/AirTankNH" aria-label="Twitter Page" target="_blank" rel='noopener noreferrer'>
                                        <div className='icon-unicode'>&#120143;</div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        {/* Copyright */}
                        <Col className='text-center text-md-start'>
                            <small>&copy; {getCurrentYear()}, {text.rights}</small>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;