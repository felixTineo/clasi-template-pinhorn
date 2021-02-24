import React, { useContext } from 'react';
import { Link as GatsbyLink, Link } from 'gatsby';
import Context from '../../_context';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';
import { FacebookFilled, InstagramFilled, LinkedinFilled, PhoneOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, .05);
`
const MainFooter = styled.div`
  padding: 4rem 0;
`
const FooterRightsCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  font-size: .8rem;
  @media(min-width: 768px){
    padding: .5rem 0;
  }  
`
const OfficeInfoCont = styled.ul`
  padding: 0;
  margin: 0;
  //margin-top: 2rem;
  list-style: none;
`
const OfficeInfo = styled.li`
  color: #8E8787;
  margin-bottom: .5rem;
`
const OfficePhone = styled.a`
  color: #8E8787;
  &:visited{
    color: #8E8787;
  }
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const FooterRights = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
  }      
`
const NavLink = styled(Link)`
  color: #212121;
  transition: 250ms ease;
  text-decoration: none;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    display: block;
  }
  &:hover{
    color: ${props => props.theme.main.primaryColor} !important;
  }
  &:visited{
    color: #212121;
  }
`
const SvgIcon = styled.span`
  color: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
  font-size: 1.5rem;
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`

const SocialItem = styled.li`
  margin-left: .5rem;
`

const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 180px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  font-weight: bold;
`

const DevelopBy = styled.a`
  color: #fff !important;
  font-weight: bold;
  margin-left: .5rem;
`

const LogoCont = styled.div`
  margin-bottom: 2rem;
`
const BackTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BackTop = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.main.primaryColor};
  margin-bottom: 1rem;
  transition: 250ms ease;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    filter: brightness(1.1);
  };
  &:active{
    box-shadow: none;
  }
`
 

export default ()=> {
  const office = useContext(Context).office;
  const state = useContext(Context);
  const builderId = useContext(Context).builderId;
  const handleTop = ()=> window.scrollTo(0, 0);
  return(
    <Footer>
      <MainFooter>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                <GatsbyLink to={`/`} style={{ textDecoration: 'none' }}>
                  <LogoCont>
                    {
                      state.main.logoDark.isImage
                        ?<Logo src="/logo-footer.png" alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                  </LogoCont>                        
                </GatsbyLink>         
                </Col>
                <Col xs={12}>
                  <OfficeInfoCont>
                    <OfficeInfo>
                      {office.address}
                    </OfficeInfo>
                    <OfficeInfo>
                      <OfficePhone href="tel:+56233330207">
                        <PhoneOutlined style={{ marginRight: 8 }} />
                        {office.phone}
                      </OfficePhone>
                    </OfficeInfo>
                    <OfficeInfo>
                      <OfficePhone href="https://api.whatsapp.com/send?phone=56954586436&text=Hola,%20estoy%20visitando%20el%20sitio%20Nilo%20Zucco%20y%20quisiera%20comunicarme%20con%20alguien.">
                        <WhatsAppOutlined style={{ marginRight: 8 }} />
                        {office.mobile}
                      </OfficePhone>                      
                    </OfficeInfo>
                    <OfficeInfo>
                      <OfficePhone href="mailto:info@nilozucco.cl">
                        <MailOutlined style={{ marginRight: 8 }} />
                        {office.email}
                      </OfficePhone>
                    </OfficeInfo>
                  </OfficeInfoCont>                                
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <NavCont>
                <Row>
                  <Col xs={6} md={6}>
                    <NavLink to={`/about`}>
                      Nosotros
                    </NavLink>
                  </Col>
                  <Col xs={6} md={6}>
                    <NavLink to={`/properties`}>
                      Propiedades
                    </NavLink>                  
                  </Col>
                  <Col xs={6} md={6}>
                    <NavLink to={`/services`}>
                      Servicios
                    </NavLink>                  
                  </Col>                  
{/*                  <Visible md xs xxl lg xl>
                    <Col xs={6} md={6}>
                      <NavLink to="/news">
                        Noticias
                      </NavLink>                  
                    </Col>
</Visible>*/}
                  <Col xs={6} md={6}>
                    <NavLink to={`/contact`}>
                      Contacto
                    </NavLink>                  
                  </Col>                                          
                </Row>
              </NavCont>
            </Col>         
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                </Col>                            
                <Col xs={12}>
                    <Hidden xs>
                        <BackTopCont>
                          <BackTop onClick={handleTop} href="#top">
                            <img src="/icons/chevron-up.svg" alt="backtop" />
                          </BackTop>
                        </BackTopCont>
                    </Hidden>                   
                  <SocialNav>
                    <li>Síguenos en</li>
                    <SocialItem style={{ marginLeft: "1rem" }}>
                      <a href={office.facebook} alt="facebook" rel="noopener">
                        <SvgIcon social={true} width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <FacebookFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>
                    <SocialItem>
                      <a href={office.instagram} alt="instagram" rel="noopener">
                        <SvgIcon social={true} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <InstagramFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>     
                    <SocialItem>
                      <a href={office.twitter} alt="Linkedin" rel="noopener">
                        <SvgIcon social={true} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <LinkedinFilled />
                        </SvgIcon>
                      </a>
                    </SocialItem>                         
                  </SocialNav>
                </Col>  
              </Row>
            </Col>                          
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>2020 © Todos los derechos reservados</li>
            <li>Desarrollado por <DevelopBy href="https://clasihome.com/" alt="clasihome website" rel="noopener" target="_blank">Clasihome</DevelopBy></li>
          </FooterRights>
        </Container>
      </FooterRightsCont>
      
    </Footer>
  )
}
/*
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <a href="/">
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                </a>
              </GatsbyLink>
*/