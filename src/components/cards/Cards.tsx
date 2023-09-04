import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card'
import Spinner from 'react-bootstrap/Spinner';
import { useGetNationalParks } from '../../hooks/useGetNationalParks';

interface ParkItem {
    id: string,
    fullName: string,
    description: string,
    images: [{url: string, altText: string}] | null,
    latitude: string,
    longitude: string,
    activities: [{ id: string, name: string}],
    url: string,
}

const colors = ['lime', 'green', 'orange', 'teal'];

const Cards = () => {
    const { data, isLoading, isError, error } = useGetNationalParks();
    const { data: parks } = data ?? {};

console.log(error)
// TODO -- make this better
    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (isError) {
        return <p>There is an error! Oh no!!!!!</p>
    }

    return (
        <Container className='mt-5'>
            <Row>
            {parks && parks.length > 0 ? 
                parks.map((park: ParkItem, index: number) => {
                    const bgColorClass = `card-${colors[index % 4]}`
                    return (
                        <Card 
                            key={park.id}
                            className={`${bgColorClass}`}
                            name={park.fullName} 
                            description={park.description} 
                            img={park.images && park.images.length > 0 ? park.images[0] : null}
                            coordinates={[{lat: park.latitude, long: park.longitude}]} 
                            activities={park.activities.slice(0,2)} 
                            link={park.url}  
                        />
                    )}) : null}          
            </Row>

        </Container>
    )
}

export default Cards;