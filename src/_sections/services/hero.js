import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),  url("/602bbc5b11626.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`
const TitleCont = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 157px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.h1`
  position: relative;
  color: #fff;
  padding: 1rem;
  text-align: left;
  margin: 0;
  width: 100%;
  font-weight: 300;
  @media(min-width: 576px){
    text-align: left;
    width: 50vw;
  }
`
const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <TitleCont>
          <Title>
            Manejamos una cartera selecta y reducida de propiedades para entregar un servicio de excelencia.
          </Title>
        </TitleCont>        
      </Container>
    </MainCont>
  )
}