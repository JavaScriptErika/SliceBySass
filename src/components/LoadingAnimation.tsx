import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react';
import treeAnimation from '../assets/lottie/treeAnimation.json';
import rainAnimation from '../assets/lottie/rainCloudBikeAnimation.json';


type AnimationType = 'tree' | 'rain';

interface LoadingAnimationProps {
  animationType: AnimationType;
  showText?: boolean;
  text?: string;
}

const animations = {
  'tree': treeAnimation,
  'rain': rainAnimation,
};

const LoadingAnimation = ({ animationType, showText = true, text = 'Loading...' }: LoadingAnimationProps) => {
  const lottieFile = animations[animationType];

  return (
    <Container>
      <Row>
        <Col className='py-4' sm={{ span: 4, offset: 4 }}>
          <Lottie animationData={lottieFile} />
          {showText && <p className='fw-bold text-center'>{text}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingAnimation;