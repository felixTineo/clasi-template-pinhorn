import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
    background-image: linear-gradient( to right, rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)),  url(${props => props.theme.about.hero.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const TitleCont = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 157.14px;
`
const Title = styled.h1`
  position: relative;
  color: #fff;
  //padding: 1rem;
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
            {state.hero.title}
          </Title>
        </TitleCont>        
      </Container>
    </MainCont>
  )
}