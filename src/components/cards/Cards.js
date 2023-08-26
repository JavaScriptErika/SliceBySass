import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card'
import Spinner from 'react-bootstrap/Spinner';
import { useGetNationalParks } from '../../hooks/useGetNationalParks';

const Cards = () => {
    const { data, isLoading, isError, error } = useGetNationalParks();
    const { data: parks } = data ?? {};

console.log(error)
    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (isError) {
        return <p>There is an error! Oh no!!!!!</p>
    }

    return (
        <Container>
            <Row>
            {parks.length > 0 ? 
                parks.map(park => {
                const imgUrl = park.images[0];
             
                    return (
                        <Card 
                            key={park.id}
                            name={park.fullName} 
                            description={park.description} 
                            // coordinates={'123123'} 
                            // activities={'3'} 
                            link={park.url}  
                        />
                    )}) : null}          
            </Row>

        </Container>
    )
}

export default Cards;