import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/BirdTreeLogo.svg'

const Header = () => {
    return (
        <header>
            <Container className='bg-white'>
                <Row>
                    <Col lg={1}>
                    <Image src={Logo} alt="Bird tree logo" />
                    </Col>
                </Row>

            </Container>
        </header>
    )
}

export default Header;