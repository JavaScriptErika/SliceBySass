import React from 'react';
import Col from 'react-bootstrap/Col';
import { truncateDescription, truncateToThreeDecimalPlaces} from '../../utils';
import Image from 'react-bootstrap/Image';
import Placeholder from '../../assets/placeholder.jpg';
import { Map, Tree } from "react-bootstrap-icons";

interface CardProps {
    name: string,
    img: {url: string, altText: string} | null,
    description: string,
    coordinates: [{lat: string, long: string}],
    activities: any,
    link: string;
    className: string;
}

const text = {
    placeholderAlt: 'Grey background with letter C and bird logo placeholder',
    activities: 'Activities:',
    coordinates: 'Coordinates:',
    park: 'Go to Park Page'
};

const formatCoordinates = (lat: string, long: string): string => {
    const truncatedLat = truncateToThreeDecimalPlaces(lat);
    const truncatedLong = truncateToThreeDecimalPlaces(long);

    const latDirection = truncatedLat > 0 ? 'N' : 'S';
    const longDirection = truncatedLong > 0 ? 'E' : 'W';

    // Math.abs() so we're not displaying negative signs
    return `${Math.abs(truncatedLat)} ${latDirection} ${Math.abs(truncatedLong)} ${longDirection}`;
}

const Card = ({name, img, description, coordinates, activities, link, className}: CardProps) => {
    return (
        <Col md={6} className='cards d-flex flex-column mb-lg-3 my-4'>
            <div className='p-3 flex-grow-1 d-flex rounded card-container'>
                <div className='d-flex flex-column justify-content-between'>
                    <div className='d-flex flex-column flex-xl-row rounded'>
                        <Image 
                            src={img ? img.url : Placeholder} 
                            alt={img ? img.altText : `${text.placeholderAlt}`}
                            className='img-fluid rounded'
                        />  
                        <div className='p-1 p-md-3'>
                            <h4 className='d-flex justify-content-center align-items-center text-center'>{name}</h4>
                            <div  className={`card-${className}-bar card-bar mx-auto mb-2 rounded`}  />
                            <p>{truncateDescription(description, 200)}</p>
                        </div>
                    </div>
                    {activities && activities.length > 0 ? 
                        <div className='d-flex flex-column flex-lg-row flex-lg-wrap my-2 align-items-lg-center fw-bold'>
                            <p>{text.activities}</p>
                            {activities.map((activity: any) => {
                                return (
                                    <p key={activity.id} className='border rounded p-1 m-1 bg-white'>
                                        <Tree /> {activity.name}
                                    </p>
                            )})}
                        </div>
                    : null}
                    <div className='d-flex flex-column flex-lg-row align-items-lg-end justify-content-lg-between'>
                        <div className='d-flex flex-column flex-lg-row align-items-lg-center fw-bold'>
                            <p>{text.coordinates}</p>
                            <p className='border rounded p-1 m-1 bg-white'><Map /> {formatCoordinates(coordinates[0].lat, coordinates[0].long)}</p>
                        </div>
                        <a href={link} className={`btn-${className}`} target="_blank" rel='noopener noreferrer' aria-label={`Go to ${name} website`}>{text.park}</a>
                    </div>
                </div>
            </div>
        </Col>


    )
}

export default Card;