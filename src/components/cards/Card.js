
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/BirdTreeLogo.svg'

// No more than 4 cards in each row

const Card = ({name, description, coordinates, activities, link}) => {
    return (
                <Col lg={3} className='rounded'>
                    <Image src={Logo} alt="Bird tree logo" />
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{coordinates}</p>
                    <p>{activities}</p>
                    <p>{link}</p>
                </Col>
  

    )
}

export default Card;