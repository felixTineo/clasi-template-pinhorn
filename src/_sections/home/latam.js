import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const MainCont = styled.div`

`
const InfoCont = styled.div`
    box-sizing: border-box;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 440px;

`
const MainTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  text-align: center;
  text-transform: uppercase;
`
const Title = styled.h2`

`
const Description = styled.p`

`
const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  background-image: url("/some.png");
  background-position: bottom;
  background-size: cover;
`
const ButtonLink = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #b79c4e;
  border-color: transparent;
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.main.primaryColor};
  &:hover{
    background-color: #fff;
    color: ${props => props.theme.main.primaryColor};
  }
`
const LatamPass = styled.img`
  width: 180;
  height: 66px;
`

export default ()=> {

  return(
    <MainCont id="partners">
      <MainTitle>
        Partners
      </MainTitle>
        <Row>
          <Col xs={12} md={6}>
            <InfoCont>
            <Title>
              Alianza LATAM Pass
            </Title>
            <Description>
              Promocionamos algunas propiedades con Millas LATAM Pass, lo anterior implica que potenciales compradores se vean beneficiados con la acumulación de Millas, las cuales parten desde las 5000, siendo una de las oficinas de corretaje que propiedades que más Millas Regala a sus clientes. 
            </Description>
            <Description>
              ¿Cómo se cuantas millas me asiganrán por la compra de una propiedad?
            </Description>
            <Description>
              En las mismas publicaciones sujetas a esta promoción el cliente verá cuantas millas le serán transferidas al finalizar la operación. 
            </Description>
            <LatamPass src="/latam+nilo.png" />
            </InfoCont>
          </Col>
          <Col xs={12} md={6}>
            <Image>
              <ButtonLink href="https://latampass.latam.com/es_cl/" rel="noopener" target="_blank">LATAM pass</ButtonLink>
            </Image>
          </Col>          
        </Row>
    </MainCont>
  )
}