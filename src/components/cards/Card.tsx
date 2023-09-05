import React from 'react';
import Col from 'react-bootstrap/Col';
import { truncateDescription, truncateToThreeDecimalPlaces} from '../../utils';
import Image from 'react-bootstrap/Image';
import Placeholder from '../../assets/placeholder.jpg';

interface CardProps {
    name: string,
    img: {url: string, altText: string} | null,
    description: string,
    coordinates: [{lat: string, long: string}],
    activities: any,
    link: string;
    className: string;
}


const formatCoordinates = (lat: string, long: string): string => {
    const truncatedLat = truncateToThreeDecimalPlaces(lat);
    const truncatedLong = truncateToThreeDecimalPlaces(long);

    const latDirection = truncatedLat > 0 ? 'N' : 'S';
    const longDirection = truncatedLong > 0 ? 'E' : 'W';

    // Math.abs() so we're not displaying negative signs
    return `${Math.abs(truncatedLat)} ${latDirection} ${Math.abs(truncatedLong)} ${longDirection}`;
}

const Card = ({name, img, description, coordinates, activities, link, className}: CardProps) => {
    // No more than 4 cards in each row
    return (
                <Col xl={3} lg={4} md={6} className='cards d-flex flex-column mb-5'>
                    <h4 className='text-center d-flex justify-content-center align-items-center'>{name}</h4>
                    {img ? 
                        <Image src={img.url} alt={img.altText} className='img-fluid' /> : 
                        <Image src={Placeholder} className='img-fluid' alt={`Grey background with letter C and bird logo placeholder for ${name}`} /> 
                    }
                    <div className={`${className} p-3 flex-grow-1`}>
                        <p>{truncateDescription(description, 150)}</p>
                        <p>{formatCoordinates(coordinates[0].lat, coordinates[0].long)}</p>
                        {activities && activities.length > 0 ? 
                            activities.map((activity: any) => {
                                return (
                                    <p key={activity.id}>
                                        {activity.name}
                                    </p>
                            )}) 
                        : null}   
                        <a href={link} target="_blank" rel='noopener noreferrer'>Go to Park Page</a>
                    </div>

                </Col>
  

    )
}

export default Card;