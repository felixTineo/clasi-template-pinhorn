import React from 'react';
import Context from '../_context';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import 'animate.css';
import { Helmet } from "react-helmet";
import { WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`
const ContactButton = styled.a`
display: none;
@media(min-width: 768px){
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${props => props.phone ? "45%" : "55%"};;
  right:.5rem;
  background-color: #fff;
  //background-color: #06d755;
  color: #212121;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: 250ms ease;
  font-size: 1.5rem;
  border: 1px solid rgba(0, 0, 0, .12);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    color: ${props => props.phone ? props.theme.main.primaryColor : "#06d755"};
  }
}
`

export default ({ children, dark, data })=> {
  
  return(
    <Context.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Nilo Zucco Negocios Inmobiliarios, Venta y Arriendo de propiedades en Las Condes, Venta y Arriendo de departamentos y casas en la Region Metropolitana" />
            <meta name="keywords" content="nilo zucco, nilo zucco propiedades, nilo zucco propiedades las condes, departamentos las condes, propiedades las condes, arriendos las condes, casas las condes" />
            <title>Nilo Zucco - Negocios Inmobiliarios</title>
            <link rel="canonical" href="http://www.nilozucco.cl/" />
            <meta property="og:url" content="http://www.nilozucco.cl/" />
            <meta property="og:title" content="Nilo Zucco - Propiedades Destacadas" />
            <meta property="og:description" content="Nilo Zucco Negocios Inmobiliarios, Venta y Arriendo de propiedades en Las Condes, Venta y Arriendo de departamentos y casas en la Region Metropolitana" />
            <meta property="og:image" content="http://www.nilozucco.cl/logo-fb.jpg" />
            <meta name="og:type" content="website" />
            <meta name="theme-color" content={data.main.primaryColor} />
          </Helmet>             
          <Header dark={dark} />
          <Body>
            {children}
            <ContactButton title="Enviar WhatsApp" href="https://api.whatsapp.com/send?phone=56954586436&text=Hola,%20estoy%20visitando%20el%20sitio%20Nilo%20Zucco%20y%20quisiera%20comunicarme%20con%20alguien.">
              <WhatsAppOutlined />
            </ContactButton>
            <ContactButton title="Llamar" phone href="tel:+56233330207">
              <PhoneOutlined />
            </ContactButton>            
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}