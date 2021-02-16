import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { v1 as uuid } from 'uuid';
import Map from '../../_components/map';

const MainCont = styled.section`
  padding: 6rem 0;
  padding-bottom: 0;
  //min-height: 100vh;
  @media(min-width: 576px){
    //padding: 6rem 0;
  }
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //height: 70vh;
  margin: 1rem 0;
  @media(min-width: 576px){
    padding: 6rem 0;
    justify-content: center;
    width: 100%;
  }
`
const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
  font-weight: 900;
  border-bottom: 4px solid ${props => props.theme.main.primaryColor};
  span{
    font-weight: lighter;
    color: rgba(0, 0, 0, .5)
  }
`
const Description = styled.div`

`
const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  margin-top: 4rem;
  background-color:  ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  //position: relative;
  //bottom: -5px;
  top: 0;
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const CarouselProviderCustom = styled(CarouselProvider)`
  width: 100%;
`
const ButtonsContainer = styled.div`
  position: absolute;
  bottom: -2rem;
  right: 3rem;
  @media(min-width: 768px){
    bottom: 0;
  }
  button{
    background: transparent;
    border: none;
    color: hsl(88, 55%, 41%);
    font-size: 1.7rem;
    transition: 250ms ease;
    &:hover{
      color: hsl(88, 55%, 51%);
    }
    &:disabled{
      color: gray;
    }
  }
`
const ButtonBackCustom = styled(ButtonBack)`
  margin-right: 2rem;
`
const ButtonNextCustom = styled(ButtonNext)`

`

const ServiceCont = styled.div`
  //padding: 2rem;
  width: 100%;
`
const ServiceTitle = styled.p`
  font-weight: bold;
`
const ServiceDescription = styled.p`

`
const ServiceContainer = styled.div`
  display: flex;
`

const TitleCont = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
`
const Title2 = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  margin: 0;
`
const SubTitle = styled.p`
  //width: 50%;
`
const UlService = styled.ul`
  list-style: initial;
  padding: 0 2rem;
  color: gray;
`
const TitleContMap = styled(TitleCont)`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 1rem;
`
const TitleMap = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
`

const Service = ({ id, title, description }) => {
  return(
    <ServiceCont>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceCont>    
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.home.services.items;
  const { lat, lng } = useContext(Context).office;
  return(
    <MainCont>
      <Container>
        <Row>
          <Hidden xs>
            <Col xs={12} md={6}>
              <Image src={"/602bbcf7a3f0d.jpg"} alt="historia" />
            </Col>  
          </Hidden>              
          <Col xs={12} md={6}>
            <HistoryCont>
              <Title>
                NUESTROS <span>SERVICIOS</span>
              </Title>
              <CarouselProviderCustom
                naturalSlideWidth={100}
                //naturalSlideHeight={25}
                isIntrinsicHeight={true}
                totalSlides={items.length}
                visibleSlides={1}
                orientation="horizontal"
              >
                <Slider>
                  {
                    items.map((item, index) => (
                      <Slide key={item.id} index={index}>
                        <Service {...item} />
                      </Slide>
                    ))
                  }
                </Slider>       
                <ButtonsContainer>
                  <ButtonBackCustom>
                    <ArrowLeftOutlined />
                  </ButtonBackCustom>
                  <ButtonNextCustom>
                    <ArrowRightOutlined />
                  </ButtonNextCustom>     
                </ButtonsContainer>                    
              </CarouselProviderCustom>              
            </HistoryCont>
          </Col>
          <Col xs={12} md={6}>
            <TitleCont>
              <Title2>VALOR AGREGADO</Title2>
              <SubTitle>Además de los servicios que ofrecemos en forma directa, contamos con un equipo de profesionales asociados en distintas áreas:</SubTitle>
            </TitleCont>
            <UlService>
              <li>Arquitectura</li>
              <li>Ingenieros</li>
              <li>Tasaciones</li>
              <li>Proyectos</li>
              <li>Abogados</li>
              <li>Diseño</li>
              <li>Construcción</li>
              <li>Reparaciones</li>
              <li>Instalaciones eléctricas</li>
            </UlService>            
          </Col>
          <Col xs={12} md={6}>
            <TitleContMap>
              <TitleMap>Encuéntranos en Av. Presidente Riesco N° 5037 – Las Condes.</TitleMap>
            </TitleContMap>
            {
              lat && (
                <Map
                lat={parseFloat(lat)}
                lng={parseFloat(lng)}
                height={300}
                zoom={18}
              />         
              )
            }                  
          </Col>          
        </Row>
      </Container>
    </MainCont>
  )
}