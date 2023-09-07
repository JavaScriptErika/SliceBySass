import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
    return (
        <header>
            <Container className='py-2'>
                <Row>
                    <Col xs={6} md={4} lg={3} xl={2}>
                    </Col>
                </Row>

            </Container>
        </header>
    )
}

export default Header;