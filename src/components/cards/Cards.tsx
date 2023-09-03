import React from 'react';
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
            {parks && parks.length > 0 ? 
                parks.map((park: any) => {
                    console.log(park)
                    return (
                        <Card 
                            key={park.id}
                            name={park.fullName} 
                            description={park.description} 
                            img={park.images && park.images.length > 0 ? park.images[0] : null}
                            coordinates={[park.latitude, park.longitude]} 
                            // activities={park.activities} 
                            link={park.url}  
                        />
                    )}) : null}          
            </Row>

        </Container>
    )
}

export default Cards;