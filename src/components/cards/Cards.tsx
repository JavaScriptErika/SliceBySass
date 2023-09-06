import React, { lazy, Suspense } from 'react';import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoadingAnimation from '../LoadingAnimation';
import { useGetNationalParks } from '../../hooks/useGetNationalParks';

const Card = lazy(() => import('./Card'));

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

const text = {
    errorMsg: 'Looks like we got caught in the rain. Try again later.'
}

const colors = ['lime', 'green', 'orange', 'teal'];

const Cards = () => {
    const { data, isLoading, isError } = useGetNationalParks();
    // parks defaults to empty array if data is null or undefined
    const { data: parks = []} = data ?? {};

    if (isLoading) {
        return <LoadingAnimation animationType='tree' showText={false} />;
    }

    if (isError) {
        return <LoadingAnimation animationType='rain' text={text.errorMsg} />;
    }

    return (
        <section className='cards-section'>
            <Container className='py-5'>
                <Row>
                    <Suspense fallback={<LoadingAnimation animationType='tree' />}>
                        {parks && parks.length > 0 ? 
                            parks.map((park: ParkItem, index: number) => {
                                const colorClass = `${colors[index % 4]}`
                                return (
                                    <Card 
                                        key={park.id}
                                        className={`${colorClass}`}
                                        name={park.fullName} 
                                        description={park.description} 
                                        img={park.images && park.images.length > 0 ? park.images[0] : null}
                                        coordinates={[{lat: park.latitude, long: park.longitude}]} 
                                        activities={park.activities.slice(0,3)} 
                                        link={park.url}  
                                    />
                            )}) : null
                        }
                    </Suspense>         
                </Row>
            </Container>
        </section>
    )
}

export default Cards;