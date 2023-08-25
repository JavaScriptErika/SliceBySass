import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card'

const Cards = () => {
    return (
        <Container>
            <Row>            
                <Card name={'Desert'} description="hefsefhwkjefhjk" coordinates={'123123'} activities={'3'} link={'www.google.com'}  />
                <Card name={'Desert'} description="hefsefhwkjefhjk" coordinates={'123123'} activities={'3'} link={'www.google.com'}  />
                <Card name={'Desert'} description="hefsefhwkjefhjk" coordinates={'123123'} activities={'3'} link={'www.google.com'}  />
                <Card name={'Desert'} description="hefsefhwkjefhjk" coordinates={'123123'} activities={'3'} link={'www.google.com'}  />
            </Row>

        </Container>
    )
}

export default Cards;