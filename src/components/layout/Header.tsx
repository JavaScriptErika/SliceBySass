import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <Container className='py-2'>
                <Row>
                    <Col xs={6} md={4} lg={3} xl={2}>
                        <Image src={Logo} className='img-fluid' alt="Bird tree logo" />
                    </Col>
                </Row>

            </Container>
        </header>
    )
}

export default Header;