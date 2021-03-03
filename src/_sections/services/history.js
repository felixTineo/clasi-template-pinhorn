import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { v1 as uuid } from 'uuid';
import Map from '../../_components/map';

const CHARS = [
  {
    title: "PÚBLICO EXIGENTE",
    description: "Se dirigen a un público exigente y acotado, a menudo amigos, conocidos o personas que han escuchado de la corredora como consecuencia del boca a boca, o a través de las páginas web o redes sociales."
  },
  {
    title: "POCAS PROPIEDADES",
    description: "Trabajan con pocas propiedades a la vez para poder concentrarse en las demandas específicas de cada uno de los clientes.",
  },
  {
    title: "TRATO PERSONALIZADO",
    description: "Ofrecen un trato personalizado y servicio de asesoría hasta que se termina la operación. Se crea una relación cercana y de comunicación constante hasta el final.",
  },
]

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
  color: ${props => props.theme.main.primaryColor};
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
    color: hsl(22, 81%, 57%);
    font-size: 1.7rem;
    transition: 250ms ease;
    &:hover{
      color: hsl(22, 81%, 67%);
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
  margin: 2rem 0;
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
  li{
    color: ${props => props.theme.main.primaryColor};
    margin-bottom: 1rem;
    span{
      color: gray;
    }
    strong{
      color: #212121;
    }
  }
`
const TitleContMap = styled(TitleCont)`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 1rem;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
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
                Corredora <span>Boutique</span>
              </Title>
              <CarouselProviderCustom
                naturalSlideWidth={100}
                //naturalSlideHeight={25}
                isIntrinsicHeight={true}
                totalSlides={items.length}
                visibleSlides={1}
                orientation="horizontal"
                isPlaying
                infinite
              >
                <Slider>
                  {
                    CHARS.map((item, index) => (
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
          <Col xs={12} md={12}>
            <TitleCont>
              <Title2>VENTAS</Title2>
            </TitleCont>
            <UlService>
              <li><span>Valorización comercial de su propiedad.</span></li>
              <li><span>Visitas guiadas y asistidas siempre.</span></li>
              <li><span>Fotografías profesionales.</span></li>
              <li><span>Asesoría Legal.</span></li>
              <li><span>Estudio de títulos y redacción de escritura sin costo. por medio de nuestros abogados (Alianza LEGAL BROKER).</span></li>
              <li><span>Convenio de publicación con los más importantes portales inmobiliarios.</span></li>
              <li><span>Nuestra comisión solamente se paga una vez finalizada la operación.</span></li>
              <li><span>Servicios complementarios por medio de nuestros asociados (remodelaciones, mudanzas,, repisas para bodegas, informe de tasación).</span></li>
              <li><span>Alianza LATAM Pass.</span></li>
              <li>
                <strong>PROMOCIÓN DE REDES SOCIALES</strong><br />
                <span>Publicamos su propiedad en nuestras plataformas de redes sociales, incluidas Instagram y Facebook, y también pagamos para promover las publicaciones para que lleguen no solo a nuestros seguidores sino a decenas de miles más.</span>
              </li>
              <li>
                <strong>TOUR VIRTUAL 3D</strong><br />
                <span>Trabajamos con MATTERPORT 3D para crear un recorrido virtual tridimensional de su propiedad, lo que permite a los posibles compradores de todo el mundo caminar virtualmente por su hogar. También creamos una vista de arriba hacia abajo para cada nivel de la casa, lo que permite a los usuarios una vista clara del diseño de la propiedad </span>
              </li>
            </UlService>            
          </Col>
          <Col xs={12} md={12}>
            <TitleCont>
              <Title2>ARRIENDOS</Title2>
            </TitleCont>
            <UlService>
              <li><span>Asesoría en la definición del canon de arriendo</span></li>
              <li><span>Visitas guiadas y asistidas siempre.</span></li>
              <li><span>Fotografías profesionales.</span></li>
              <li><span>Convenio de publicación con los más importantes portales inmobiliarios.</span></li>
              <li><span>Estricto proceso de selección del arrendatario.</span></li>
              <li><span>Asesoría Legal.</span></li>
              <li><span>Redacción de contratos por medio de nuestros abogados (Alianza LEGAL BROKER).</span></li>
              <li><span>Entrega de la propiedad.</span></li>
            </UlService>            
          </Col>          
          <Col xs={12} md={12}>
            <TitleCont>
              <Title2>ADMINISTRACIONES</Title2>
            </TitleCont>
            <UlService>
              <li><span>Recaudación de arriendo y transferencia en cuenta corriente del arrendador.</span></li>
              <li><span>Envío de liquidación de arriendo electrónica.</span></li>
              <li><span>Gestión de reparaciones.</span></li>
              <li><span>Reajuste del canon de arriendo.</span></li>
              <li><span>Término de Arriendo.</span></li>
              <li><span>Orientación Legal.</span></li>
              <li><span>Publicación en el Boletín Comercial.</span></li>
            </UlService>            
          </Col>                    
          <Col xs={12}>
            <TitleContMap>
              <TitleMap>Nuestra dirección comercial:  {state.office.address}</TitleMap>
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