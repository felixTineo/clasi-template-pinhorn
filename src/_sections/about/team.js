import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  @media(min-width: 768px){
  }
`

const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  font-weight: 300;
  margin-bottom: 4rem;
  text-align: left;
  @media(min-width: 768px){
    padding: 4rem 0;
    font-size: 50px;
  }
`
const Card = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
  @media(min-width: 768px){
    //margin: 0;
  }
`
const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: cover;
  margin-right: 2rem;
`
const Name = styled.p`
  color: ${props => props.theme.main.primaryColor};
  //margin-top: 2rem;
  font-weight: bold;
`
const Description = styled.p`
  height: 120px;
  overflow: hidden;
  text-align: left;
`
const ContactCont = styled.ul`
  color: ${props => props.theme.main.primaryColor};
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactInfo = styled.li`
  font-weight: bold;
  text-align: left;
`
const Uldesc = styled.ul`
  list-style: initial;
  padding-left: 1rem;
  min-height: 10rem;
`
export default ()=> {
  const state = useContext(Context).about.team;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              ¿Quiénes somos?
            </Title>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <div>
              <Avatar src="/team-2.png" alt="Lucía Arratia Valdebenito" />
              </div>
              <div>
              <Name>Lucía Arratia Valdebenito</Name>
              <Uldesc>
                <li>
                  Licenciada en Historia – Pontificia Universidad Católica de Chile
                </li>
                <li>
                  20 años en el negocio editorial técnico en Minería
                </li>
                <li>
                  12 años Socia Revista Nueva Minería y Energía
                </li>
              </Uldesc>
              <ContactCont>
                <ContactInfo>
                  lav@lavpropiedades.com
                  <br />
                  +56 9 9873 6945               
                </ContactInfo>
              </ContactCont>
              </div>
            </Card>
          </Col>    
          <Col xs={12} md={6}>
            <Card>
              <div>
              <Avatar src="/team-1.png" alt="Mauricio Ramos Baltra" />
              </div>
              <div>
              <Name>Mauricio Ramos Baltra</Name>
                <Uldesc>
                  <li>
                    Ingeniero Civil de Industrias – Pontificia Universidad Católica de Chile
                  </li>
                  <li>MBA – Escuela de Administración – Pontificia Universidad Católica de Chile</li>
                  <li>
                    Experiencia de más de 30 años en cargos de primera línea en importantes bancos nacionales
                  </li>
                </Uldesc>
              <ContactCont>
                <ContactInfo>
                  lav@lavpropiedades.com
                  <br />
                  +56 9 9318 9488            
                </ContactInfo>
              </ContactCont>
              </div>
            </Card>
          </Col>                    
          {/*
            state.items.map(m => (
              <Col xs={12} md={3} key={m.id}>
                <Card>
                  <Avatar src={m.avatar} alt={m.lastName} />
                  <Name>{m.fullName}</Name>
                  <Description>
                    {m.cv}
                  </Description>
                  <ContactCont>
                    <ContactInfo>
                      {m.email}
                      {" "}
                      {m.phone}                      
                    </ContactInfo>
                  </ContactCont>
                </Card>
              </Col>
            ))
            */}
        </Row>
      </Container>
    </MainCont>
  )
}