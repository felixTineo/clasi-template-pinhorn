import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const IMAGES = [
  "/stag-1.jpg",
  "/stag-2.jpg",
  "/stag-3.jpg",
  "/stag-4.jpg",
  "/stag-5.jpg",
  "/stag-6.jpg"
]

const MainCont = styled.div`
  margin: 8rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  font-weight: 900;
  border-bottom: 4px solid ${props => props.theme.main.primaryColor};
  display: inline-block;
  span{
    font-weight: lighter;
    color: rgba(0, 0, 0, .5)
  }
`
const Description = styled.p`

`
const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`
export default ()=> {

  return(
    <Container>
      <MainCont>
        <Row align="center">
          <Col xs={12} md={6}>
          <CarouselProvider
            naturalSlideWidth={100}
            //naturalSlideHeight={100}
            isIntrinsicHeight
            totalSlides={6}
            isPlaying
            infinite
          >
            <Slider>
              {
                IMAGES.map((item, index) => (
                  <Slide index={index}>
                    <Image src={item} />
                  </Slide>
                ))
              }
            </Slider>
          </CarouselProvider>            
          </Col>
          <Col xs={12} md={6}>
            <Title>
              Home <span>Staging</span>
            </Title>            
            <Description>
              Previo a la toma de fotografías profesionales y de la creación del tour vitual asesoramos a nuestros clientes en la puesta en escena de su propiedad. Esto para sacar el mejor partido a su inmueble por medio de la optimización visual. 
            </Description>
            <Description>
              Una casa o departamento bien ordenado, sin artículos personales y limpio, hace la diferencia. 
            </Description>
            <Description>
              El home staging es una herramienta del marketing inmobiliario con la que se consigue mejorar la imagen de las viviendas, lo que facilita su venta.
            </Description>
          </Col>
        </Row>
      </MainCont>
    </Container>
  )
}