import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
    return (
        <section className="p-5 hero-wrapper rounded">
            <Container>
                <Row>
                    <Col>
                        <h1>Starry Nights and Desert Delights: Exploring California's National Parks</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;