import React from 'react';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Logo from '../../assets/BirdTreeLogo.svg'

interface CardProps {
    name: string,
    img: [],
    description: string,
    coordinates: [{lat: string, long: string}] | [{}],
    activities: [],
    link: string;
}

const truncateDescription = (description: string, lengthToShow: number) => {
    return description.length > lengthToShow ? `${description.substring(0, lengthToShow)}...` : description;
}

const Card = ({name, img, description, coordinates, activities, link}: CardProps) => {
    // No more than 4 cards in each row
    console.log(img, coordinates, activities)
    return (
                <Col lg={3} className='rounded'>
                    {/* <Image src={Logo} alt="Bird tree logo" /> */}
                    <p>{name}</p>
                    {/* <p>{img}</p> */}
                    <p>{truncateDescription(description, 150)}</p>
                    {/* <p>{coordinates}</p>
                    <p>{activities}</p> */}
                    <a href={link} target="_blank" rel='noopener noreferrer'>Go to Park Page</a>
                </Col>
  

    )
}

export default Card;