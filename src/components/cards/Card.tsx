import React from 'react';
import Col from 'react-bootstrap/Col';
import { truncateDescription, truncateToThreeDecimalPlaces } from 'src/utils';
import Image from 'react-bootstrap/Image';
// import Logo from '../../assets/BirdTreeLogo.svg'

interface CardProps {
    name: string,
    img?: {url: string, altText: string},
    description: string,
    coordinates: [string, string],
    // activities: any,
    link: string;
}


const formatCoordinates = (lat: string, long: string): string => {
    const truncatedLat = truncateToThreeDecimalPlaces(lat);
    const truncatedLong = truncateToThreeDecimalPlaces(long);

    const latDirection = truncatedLat > 0 ? 'N' : 'S';
    const longDirection = truncatedLong > 0 ? 'E' : 'W';

    // Math.abs() so we're not displaying negative signs
    return `${Math.abs(truncatedLat)} ${latDirection} ${Math.abs(truncatedLong)} ${longDirection}`;
}

const Card = ({name, img, description, coordinates, link}: CardProps) => {
    // No more than 4 cards in each row
    return (
                <Col xl={3} lg={4} md={6} className='rounded'>
                    {img ? <Image src={img.url} alt={img.altText} className='img-fluid' /> : null}
                    <p>{name}</p>
                    {/* <p>{activities[0]}</p> */}
                    {/* <p>{img.credit}</p> */}
                    <p>{truncateDescription(description, 150)}</p>
                    <p>{formatCoordinates(coordinates[0], coordinates[1])}</p>
                    {/* <p>{activities}</p> */}
                    <a href={link} target="_blank" rel='noopener noreferrer'>Go to Park Page</a>
                </Col>
  

    )
}

export default Card;